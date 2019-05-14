import { Component } from '@angular/core';
import { ToastController, IonicPage } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  height: number;
  weight: number;
  bmi: string;

  constructor(public toast: ToastController) {}

  calculate(heigth, weight) {
    this.bmi = (weight/(heigth*heigth)).toFixed(2);
    this.toast.create({
      message: `Your BMI is ${this.bmi}`,
      duration: 3000
    }).present();
  }
}
