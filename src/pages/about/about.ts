import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavController, NavParams } from 'ionic-angular';
import { TimerComponent } from '../../components/timer/timer'
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  /*directives: [TimerComponent]*/ // Directives was REMOVED !!!
})
export class AboutPage {
  onCleanKeypad: Subject<any> = new Subject<any>();
  timerInterval : number;
  timeProgress : number;
  viewData : any [];
  data : number [];
  timeLimit : number;
  score: number = 0;
  index: number = 0;
  showKeypad: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timeLimit = parseInt(navParams.data.timeLimit);

    this.generateInitialValues(parseInt(navParams.data.count));
  }

  generateInitialValues(boxCount: number) : void {
    const difficulty = 20;
    this.viewData = Array(boxCount).fill(1).map(() => this.generateRandomNumber(difficulty));
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
    }

    if(parseInt(val) === this.data[this.index]) {
      this.viewData[this.index] = "OK";
      this.index ++;
      if(this.index >= this.data.length) {
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
    clearInterval(this.timerInterval);
    this.navCtrl.push(SettingsPage);
  }

  startGame(): void {
    if(this.showKeypad === true) {
      this.closeGame();
    }
    this.showKeypad = true;
    this.hideBoxValues();
    this.startGameRound();
  }

  startGameRound() {
    const difficulty = 5;
    let num = this.generateRandomNumber(difficulty);
    let sign = this.generateRandomNumber(2,1);

    if(this.data[this.index] <= 5) {
      sign = 2;
    }
    if(sign === 1) {
      num = num * -1;
    }

    this.viewData[this.index] = (sign === 1 ? '' : '+') + num;
    this.data[this.index] += num;
    console.log('startGameRound', this.data);
    this.startTimer();
  }

  hideBoxValues(): void {
    this.data = [].concat(this.viewData);
    this.viewData.fill(null);
  }

  endGame() : void {
    this.cleanKeypad();
    clearInterval(this.timerInterval);
    this.viewData = this.data;
    this.viewData[this.index] = `Game over! Should be: ${this.data[this.index]}`;
  }

  startTimer(): void {
    clearInterval(this.timerInterval);
    this.timeProgress = 0;

    this.timerInterval = setInterval(() => {
      this.timeProgress += 1;
      //console.log("pr", this.timeProgress);
      if(this.timeProgress >= 100){
        clearInterval(this.timerInterval);
        this.endGame();
      }

    },10*this.timeLimit);
  }


}
