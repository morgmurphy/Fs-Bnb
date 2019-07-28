import { Component, OnInit } from '@angular/core';
import { Graph } from '../../models/graph';
import {GraphDataService} from '../../services/admin-panel/graph-data.service'

//guestBookingLength: Graph = new Graph();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  guestBookingLength: Graph = new Graph();
  constructor(private graphDataService: GraphDataService) { }

  ngOnInit() {
    this.guestBookingLength = this.updateGraph(this.graphDataService.getLengthOfGuestBookings(), 'pie', 'Guest Booking Length');
}
  updateGraph(data, type, title){
    let graph = new Graph();
    graph.data = [];
    graph.data.push(data);
    graph.labels = data.xAxis;
    graph.type = type;
    graph.title = title;
    return graph;
  }
  

}



