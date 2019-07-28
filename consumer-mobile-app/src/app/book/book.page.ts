import { Component, OnInit } from '@angular/core';
import { ListingsService } from "../services/listings.service"
import {Listing} from "../models/listing"
import {BookingsService} from "../services/bookings.service"
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  listing: Listing;

  date_to: string;
  date_from: string;
  user_id: string;
  listing_id: string;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private listingService: ListingsService,
    private bookingService: BookingsService
  ) { 
    this.listingService.getListingById(this.listingService.listingId).then((listing: any) => {
      this.listing = listing[0];
    })
    localStorage.setItem("listingId", String(this.listingService.listingId))
  }
  
  ngOnInit() {
  }

  createBooking() {
    const authBooking = {
      date_to: this.date_to,
      date_from: this.date_from,
      //property_id: this.property_id,
      //user_id: this.user_id

      listing_id: localStorage.getItem("listingId"),
      user_id: localStorage.getItem("userId"),

    }
    this.bookingService.createBooking(authBooking).then(res => {
  
      const testId = localStorage.getItem('bookingId');
      console.log(testId)
  
      this.navCtrl.navigateForward('explore', {
        queryParams: {
          user: res
        }
      });
    }).catch(err => {
      this.presentAlert(err);
    });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to book',
      message: err,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
