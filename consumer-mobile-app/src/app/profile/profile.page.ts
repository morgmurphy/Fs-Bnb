import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import {AuthService } from '../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  firstName: string;
  lastName: string;
  email: string;

  constructor(
    private NavCtrl: NavController,
    //public firstName: string,
    private toastCtrl: ToastController,
    private userService: UserService,
    private authService: AuthService,

  ) { 
    //this.firstName = window.localStorage.getItem('firstName');
    this.userService.getUserById(localStorage.getItem('userId')).then(user => {
      this.firstName = user[0].firstName; 
      this.lastName = user[0].lastName;
      this.email = user[0].email;
    })


    // const user = this.authService.getLoggedInUser();
    // if (user) {
    //   this.firstName = user.firstName; 
    //   this.lastName = user.lastName;
    //   this.email = user.email;
    // } else {
    //   this.NavCtrl.navigateForward('login');
    // }


  } 

  navToSaved() {
    this.NavCtrl.navigateForward("saved");
  }

  navToInbox() {
    this.NavCtrl.navigateForward("inbox");
  }
  navToExplore() {
    this.NavCtrl.navigateForward("explore");
  }

  navToTrips() {
    this.NavCtrl.navigateForward("trips");
  }

  ngOnInit() {
  }

  async presentToast(name) {
    const toast = await this.toastCtrl.create({
      message: 'Welcome ' + name + '!',
      duration: 2000
    });
    toast.present();
  }

}
