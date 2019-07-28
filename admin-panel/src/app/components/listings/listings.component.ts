import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  public listings: Array<Listing> = [];

  constructor(
    private listingService: ListingsService
  ) { 
    this.listingService.getListings().then((response: any) => {
      this.listings = response;
    }).catch(err => alert(err));
  }

  ngOnInit() {
  }

}
