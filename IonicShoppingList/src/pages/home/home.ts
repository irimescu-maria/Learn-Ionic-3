import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//By adding '@IonicPage()' we can lazy loading the HomePage
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
