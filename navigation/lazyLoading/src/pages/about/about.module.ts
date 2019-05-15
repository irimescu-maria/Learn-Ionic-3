import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { ComponentModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    ComponentModule
  ],
  exports: [
    AboutPage
  ]
})
export class AboutPageModule {}
