import { Component, OnDestroy } from '@angular/core';
import { TimerService } from '../../services/timerService';
import { Subscription }   from 'rxjs/Subscription';

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
export class TimerComponent implements OnDestroy {
  subscription: Subscription;
  progress = 0;

  constructor(private timerService: TimerService) {
    this.subscription = timerService.progress$.subscribe(
      progress => {
        this.progress = progress;
      });
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
}
