import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';

import { Item } from '../../models/item/item.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
//By adding '@IonicPage()' we can lazy loading the HomePage
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;
  shopping: Item[];

  constructor(public navCtrl: NavController,
              private shoppingListService: ShoppingListService) {

    // this.shoppingList$ = this.shoppingListService
    //   .getShoppingList() // get db list
    //   .snapshotChanges() // get both key and value
    //     .map(changes => {
    //       return changes.map(c => ({
    //         key: c.payload.key, ...c.payload.val()
    //       }));
    //     })

    //     console.log(this.shoppingList$);
              this.shoppingListService.getShoppingList().snapshotChanges();
  }



}
