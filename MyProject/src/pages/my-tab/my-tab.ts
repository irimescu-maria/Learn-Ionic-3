import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MyTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tab',
  templateUrl: 'my-tab.html'
})
export class MyTabPage {

  tabOneRoot = 'TabOnePage'
  tabTwoRoot = 'TabTwoPage'


  constructor(public navCtrl: NavController) {}

}
