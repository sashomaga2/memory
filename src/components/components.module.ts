import { NgModule } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { KeypadComponent } from './keypad/keypad';
import { BoxComponent } from './box/box';
import { MenuComponent } from '../pages/menu/menu';
@NgModule({
	declarations: [TimerComponent,
    KeypadComponent,
    BoxComponent,
    MenuComponent],
	imports: [],
	exports: [TimerComponent,
    KeypadComponent,
    BoxComponent,
    MenuComponent]
})
export class ComponentsModule {}
