import { Component, OnInit } from '@angular/core';
import { ListingsService } from "../services/listings.service"
import {Listing} from "../models/listing"
import {BookingsService} from "../services/bookings.service"
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  listing: Listing;
  date_to: string;
  date_from: string;
  user_id: number;
  provider_id: number;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private listingService: ListingsService,
    private bookingService: BookingsService
  ) { 
    this.listingService.getListingById(this.listingService.listingId).then((listing: any) => {
      this.listing = listing[0];
    })
  }

  ngOnInit() {
  }

  bookNow() {
    this.navCtrl.navigateForward("book");
  }
}
