import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../../components/timer/timer'
import { SettingsPage } from '../settings/settings';
import { IBox, BoxState } from '../../components/box/box';
import { TimerService } from '../../services/timerService';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [TimerService]
  /*directives: [TimerComponent]*/ // Directives was REMOVED !!!
})
export class GamePage implements OnInit {
  onCleanKeypad: Subject<any> = new Subject<any>();
  boxData : IBox [];
  score: number = 0;
  index: number = 0;
  showKeypad: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private timerService: TimerService) {
    this.generateInitialValues(parseInt(navParams.data.count));
    // timer service
    this.timerService.init(parseInt(navParams.data.secondsLimit));
    this.timerService.end$.subscribe(
      () => this.endGame()
    )
  }

  generateInitialValues(boxCount: number) : void {
    const difficulty = 20;
    this.boxData = Array(boxCount).fill(null).map(() => ({ value: this.generateRandomNumber(difficulty), state : BoxState.Open, interaction: 0 }));
    console.log("generateInitialValues", this.boxData);
  }

  /* Pass function to keypad */
  onUpdateBound: Function;

  ngOnInit(){
    this.onUpdateBound = this.onUpdate.bind(this);
  }

  generateRandomNumber(to: number, from: number = 1) : number{
    return Math.floor(Math.random() * to) + from;
  }

  onUpdate(val: string) : void{
    if(val === '') {
      this.endGame();
      this.endTimer();
    }

    if(parseInt(val) === this.boxData[this.index].value) {
      this.boxData[this.index].state = BoxState.Closed;
      this.index ++;
      if(this.index >= this.boxData.length) {
        this.index = 0;
      }
      this.cleanKeypad();
      this.score += 1;
      this.startGameRound();
    }
  }

  cleanKeypad() : void {
    this.onCleanKeypad.next("Success");
  }

  closeGame() : void {
    this.endTimer();
    this.navCtrl.push(SettingsPage);
  }

  startGame(): void {
    this.showKeypad = true;
    this.hideBoxValues();
    this.startGameRound();
  }

  startGameRound() {
    const difficulty = 5;
    let num = this.generateRandomNumber(difficulty);
    let sign = this.generateRandomNumber(2,1);
    let box = this.boxData[this.index];

    if(box.value <= 5) {
      sign = 2;
    }
    if(sign === 1) {
      num = num * -1;
    }

    box.value += num;
    box.interaction = num;
    box.state = BoxState.Selected;

    this.startTimer();
  }

  hideBoxValues(): void {
    this.boxData.forEach((box : IBox) => box.state = BoxState.Closed);
  }

  endGame() : void {
    this.cleanKeypad();
    this.boxData.forEach((box: IBox) => box.state = BoxState.Open);
    this.boxData[this.index].state = BoxState.Error;
  }

  startTimer(): void {
    this.timerService.start();
  }

  endTimer(): void {
    this.timerService.end();
  }
}
