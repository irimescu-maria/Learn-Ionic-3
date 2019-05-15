import { NgModule } from "@angular/core";
import { AboutComponent } from "./about";
import { IonicModule } from "ionic-angular";

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        AboutComponent
    ]
})
export class AboutModule {}