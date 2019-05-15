import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about';
import { MenuListComponent } from './menu-list/menu-list';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [IonicModule],
    exports: [AboutComponent,
            MenuListComponent],
    declarations: [AboutComponent, MenuListComponent],
    providers: [],
})
export class ComponentModule { }
