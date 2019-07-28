import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Booking } from '../models/booking';
import { BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  items: Array <any> = [];
  private email: string
  isClicked: Boolean = true

  public bookings: Array<Booking> = [];
  public showListings: Boolean = true;

  constructor(
    private NavCtrl: NavController,
    private bookingsService: BookingsService

  ) { 
    this.bookingsService.getAllBookings().then(listArr => {
      this.bookings = listArr as Booking[];
    })
  }

  navToExplore() {
    this.NavCtrl.navigateForward("explore");
  }
  navToInbox() {
    this.NavCtrl.navigateForward("inbox");
  }

  navToProfile() {
    this.NavCtrl.navigateForward("profile");
  }
  ngOnInit() {
  }

  showInputText() {
    console.log(this.email)
    if (this.isClicked == true) {
      this.isClicked = false;
    } else {
      this.isClicked = true;
    }

  }

  getListItems() {
    return this.bookings
  }

  showHideListings() {
    console.log(this.showListings);
    if (this.showListings === true) {
      this.showListings = false;
    } else {
      this.showListings = true;
    }
  }


}
