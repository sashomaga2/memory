import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { KeypadComponent } from './keypad/keypad';
@NgModule({
	declarations: [TimerComponent,
    KeypadComponent],
	imports: [],
	exports: [TimerComponent,
    KeypadComponent]
})
export class ComponentsModule {}
