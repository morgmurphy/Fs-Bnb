import { Injectable } from '@angular/core';
import {Booking} from '../models/booking'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  bookings: Array<Booking>;
  newBooking: any;
  constructor(
    private httpClient: HttpClient
  ) {

   }

  getListItems() {
    return this.bookings;
  }

  getAllBookings() {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/booking/")
      .subscribe(
        (response: Booking[]) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }

  getBookingById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get(`http://localhost:5000/api/booking/${id}`)
      .subscribe(
        (response: Booking[]) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }

  createBooking(authBooking) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
        .post('http://localhost:5000/api/bookings/create', authBooking, { headers })
        .subscribe(
          (response: any) => {
            console.log(response.id);
            this.newBooking = response;
            localStorage.setItem('date_from', authBooking.date_from);
            localStorage.setItem('date_to', authBooking.date_to);
            localStorage.setItem('listing_id', authBooking.listing_id);
            localStorage.setItem('user_id', authBooking.user_id);
            resolve(response);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    })

  }

  setNewBooking(booking: any) { // This should be type user
    this.newBooking = booking;
  }

  getNewBooking(): any { // This should be type user
    return this.newBooking;
  }


}
