import { Injectable } from '@angular/core';
import {Listing} from '../models/listing'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  // variable instantiation
  listings: Array<Listing>;
  public listingId: number;
  
  constructor(
    private httpClient: HttpClient
  ) { 
    // this.listings = [this.listing1, this.listing2, this.listing3];
  }
  getListItems() {
    return this.listings;
  }

  getAllListings() {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/listings/getAllListings")
      .subscribe(
        (response: Listing[]) => {
          console.log(response)
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }

  getListingById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
      .get(`http://localhost:5000/api/listings/${id}`)
      .subscribe(
        (response: Listing[]) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg)
        }
      )
    })
  }
  setListingId(id) {
    this.listingId = id;
  }
  // findPropertyById(id){
  //   this.getListingById(id).then(listing => {
  //     res.send(listing) 
  //   })
  // }


}
