import { Component, OnInit } from '@angular/core';
import { Bookings } from '../../models/bookings';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  public bookings: Array<Bookings> = [];
  constructor(
    private bookingsService: BookingsService,
  ) { 
    this.bookingsService.getBookings().then((response: any) => {
      this.bookings = response;
    }).catch(err => alert(err));
  }

  ngOnInit() {
  }

}
