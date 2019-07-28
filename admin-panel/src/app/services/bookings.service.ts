import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBookings() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get('http://localhost:5000/api/bookings/')
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
