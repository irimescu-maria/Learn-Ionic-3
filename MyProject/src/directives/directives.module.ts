import { NgModule } from '@angular/core';
import { MyDirective } from './my/my';
@NgModule({
	declarations: [MyDirective],
	imports: [],
	exports: [MyDirective]
})
export class DirectivesModule {}
