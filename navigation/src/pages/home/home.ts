import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToSecondPage(): void {
    //Without using Lazy Loading
    // this.navCtrl.push(SecondPage);

    //Using Lazy Loading
    this.navCtrl.push('secondPage');
  }
}