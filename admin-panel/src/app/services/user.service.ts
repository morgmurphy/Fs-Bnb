import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor(
    private httpClient: HttpClient
  ) {}
  getUsers() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:5000/api/user/')
        .subscribe(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
    });
  }
}
