import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: Array<any>;
  loggedInUser: any;


  constructor(
    private httpClient: HttpClient
  ) { }

  login(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
        .post('http://localhost:5000/api/auth/login/user', authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log(response.id);
            this.loggedInUser = response;
            localStorage.setItem('userId', response.id);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    })

  }

  register(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
        .post('http://localhost:5000/api/auth/register/user', authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log(response.id);
            this.loggedInUser = response;
            localStorage.setItem('userId', authUser.id);
            localStorage.setItem('email', authUser.email);
            localStorage.setItem('password', authUser.password);
            localStorage.setItem('name', authUser.name);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    })

  }

  setLoggedInUser(user: any) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInUser;
  }
}


// public logIn(Authuser: any) { // This should be type user

//   return new Promise((resolve, reject) => {

//     // Please note that this will call the API noce we have created it - But for now:
//     const user: any = this.users.filter(dbUser => {
//       return dbUser.email === Authuser.email;
//     });

//     // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
//     if (user.length) {
//       if (Authuser.password === user[0].password) {
//         this.setLoggedInUser(user[0]);
//         //window.localStorage.setItem("firstName", user[0].name );
//         resolve(user[0]);
//       } else {
//         reject(new Error('Incorrect password'));
//       }
//     } else {
//       reject(new Error("User doesn't exist"));
//     }

//   });

// }
