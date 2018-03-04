import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class TimerService {

  private intervalId : number;
  private secondsLimit: number;
  private progress: number;
  // const must be READONLY but need to change Web Storm typescript compiler before that :)
  private END_PROGRESS = 100;

  // Observable string sources
  private startSource = new Subject<any>();
  private endSource = new Subject<any>();
  private progressSource = new Subject<number>();

  // Observable string streams
  start$ = this.startSource.asObservable();
  end$ = this.endSource.asObservable();
  progress$ = this.progressSource.asObservable();

  init(secondsLimit: number): void {
    this.secondsLimit = secondsLimit;
  }

  start() {
    this.clearInterval();
    this.startTimer();
    this.startSource.next();
  }

  end() {
    this.clearInterval();
    this.changeProgress(this.END_PROGRESS);
    this.endSource.next();
  }

  private changeProgress(progress: number) {
    this.progressSource.next(progress);
  }

  private clearInterval():void {
    clearInterval(this.intervalId);
  }

  private startTimer():void {
    let progress = 0;
    this.changeProgress(progress);

    this.intervalId = setInterval(() => {
      progress += 1;
      this.changeProgress(progress);
      if(progress >= this.END_PROGRESS){
        clearInterval(this.intervalId);
        this.end();
      }

    },10*this.secondsLimit);
  }
}
