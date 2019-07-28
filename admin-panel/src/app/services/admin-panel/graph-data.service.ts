import { Injectable } from '@angular/core';
import { GraphData } from '../../models/graph-data';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor() { }
  public getLengthOfGuestBookings() {
    let guestBookings = new GraphData();
    guestBookings.xAxis =
    [
      'Less than 3 days', 
      '3 - 7 days', 
      '7-14 days', 
      'More than 14 days'
    ];
    guestBookings.data = 
    [
      25, 
      31, 
      28, 
      16
    ];
    guestBookings.label = "Length of Guest Bookings";
    return guestBookings;
  }
  
  public getTotalMonthlyRental() {
    let rentalIncome = new GraphData(); // ensure data is in the form of GraphData model
    rentalIncome.xAxis =
    [
      'Jan', 
      'Feb', 
      'Mar', 
      'Apr', 
      'May', 
      'Jun', 
      'Jul', 
      'Aug', 
      'Sep', 
      'Oct', 
      'Nov', 
      'Dec'
    ];
    rentalIncome.data = 
    [
      152, 
      128, 
      103, 
      112, 
      113, 
      125, 
      142, 
      132, 
      135, 
      138, 
      145, 
      167
    ];
    rentalIncome.label = "Monthly Rental Income";
    return rentalIncome;
  }
}



