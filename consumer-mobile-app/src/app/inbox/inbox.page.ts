import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  constructor(
    private NavCtrl: NavController
  ) { }

  navToSaved() {
    this.NavCtrl.navigateForward("saved");
  }

  navToExplore() {
    this.NavCtrl.navigateForward("explore");
  }

  navToTrips() {
    this.NavCtrl.navigateForward("trips");
  }

  navToProfile() {
    this.NavCtrl.navigateForward("profile");
  }

  ngOnInit() {
  }

}
