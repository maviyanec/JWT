import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authservice: AuthService) { }

  registerForm = new FormGroup(

    {
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      Email: new FormControl(""),
      Number: new FormControl(""),
      Password: new FormControl(""),
      rpwd: new FormControl(""),
      gender: new FormControl("")
    }
  )

  onSubmitClick() {
    this.authservice.registerUser([
      this.registerForm.value.FirstName,
      this.registerForm.value.LastName,
      this.registerForm.value.Number,
      this.registerForm.value.Email,
      this.registerForm.value.Password    

    ]).subscribe(res => {
      console.log(res);
    })
  }
}