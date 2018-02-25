import { Component, Input } from '@angular/core';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  text: string;

  @Input('progress') progress;

  constructor() {
    console.log('Hello TimerComponent Component');
    this.text = 'Hello World';
  }

}
