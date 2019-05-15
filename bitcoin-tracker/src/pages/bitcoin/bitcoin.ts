import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  private currency: string = 'GBP';

  //$ after name variable means that the variable is an observable
  bitcoin$: Observable<Bitcoin>;
  constructor(private bitcoinProvider: BitcoinProvider) {
  }

  ionViewWillLoad() {
    //get the currency price
    this.getBitcoinPrice();
  }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }
}
