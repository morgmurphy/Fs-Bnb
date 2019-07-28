import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { GraphDataService } from '../../../app/services/admin-panel/graph-data.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  navItems: Array<any> = [
    {
      name: 'Home',
      rout: '/home'
    },
    {
      name: 'Users',
      rout: '/users'
    },
    {
      name: 'Service Providers',
      rout: '/service-providers'
    },
    {
      name: 'Property Listings',
      rout: '/listings'
    },
    {
      name: 'Bookings',
      rout: '/bookings'
    }
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    //this.router.navigate(['/users']);
  }

  navTo(page) {
    this.router.navigate([page.rout]);
  }
}
