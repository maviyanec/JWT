import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  serverbaseurl = 'https://localhost:7119/api/User/';

  registerUser(user: Array<any>) {
    return this.http.post(this.serverbaseurl + 'CreateUser', {
      FirstName: user[0],
      LastName: user[1],
      Number: user[2],
      Email: user[3],
      Password : user[4]

    },{responseType: 'text'});
  }

}
