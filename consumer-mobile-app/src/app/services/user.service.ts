import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<any>;
  loggedInUser: any;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.users = [
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        password: '123'
      },
      {
        name: 'Samantha',
        lastName: 'Right',
        email: 'sam@mail.com',
        password: '123'
      },
      {
        name: 'Julia',
        lastName: 'Richards',
        email: 'julia@mail.com',
        password: '123'
      },
    ];
  }




getAllUsers() {
  return new Promise((resolve, reject) => {
    this.httpClient
    .get("http://localhost:5000/api/user")
    .subscribe(
      (response) => {
        resolve(response);
      },
      (err) => {
        console.log(err);
        reject(err.msg)
      }
    )
  })
}

getUserById(id) {
  return new Promise((resolve, reject) => {
    this.httpClient
    .get(`http://localhost:5000/api/user/${id}`)
    .subscribe(
      (response) => {
        resolve(response);
      },
      (err) => {
        console.log(err);
        reject(err.msg)
      }
    )
  })
}

// setLoggedInUser(user: any) { // This should be type user
//   this.loggedInUser = user;
// }

// getLoggedInUser(): any { // This should be type user
//   return this.loggedInUser;
// }

}