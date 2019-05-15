import { NgModule } from '@angular/core';
import { MenuListComponent } from './menu-list';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [MenuListComponent],
	imports: [
		IonicModule
	],
	exports: [MenuListComponent]
})
export class MenuListModule {}
