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
  timerInterval;
  loadProgress;
  count : any [];
  navParamsCount;
  data : number [];
  limit;
  score: number = 0;
  index: number = 0;
  showKeypad: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.limit = parseInt(navParams.data.timeLimit);
    this.navParamsCount = navParams.data.count;

    this.generateInitialValues();
  }

  generateInitialValues() {
    const difficulty = 20;
    this.count = Array(parseInt(this.navParamsCount)).fill(1).map(() => this.generateRandomNumber(difficulty));
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
    console.log("called from main", val);
    console.log(this.data[this.index]);

    if(val === '') {
      this.closeGame();
    }

    if(parseInt(val) === this.data[this.index]) {
      this.count[this.index] = "OK";
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
    const num = this.generateRandomNumber(difficulty);
    this.count[this.index] = '+ ' + num;
    this.data[this.index] += num;
    console.log('startGameRound', this.data);
    this.startTimer();
  }

  hideBoxValues(): void {
    this.data = [].concat(this.count);
    console.log("hideBoxValues", this.data);
    this.count.fill(null);
  }

  gameOver() : void {
    this.cleanKeypad();
    this.count = this.data;
    this.count[this.index] = `Game over! Should be: ${this.data[this.index]}`;
  }

  startTimer(): void {
    clearInterval(this.timerInterval);
    this.loadProgress = 0;
    var self = this;
    this.timerInterval = setInterval(() => {
      this.loadProgress += 1;
      console.log("pr", this.loadProgress);
      if(this.loadProgress >= 100){
        clearInterval(this.timerInterval);
        this.gameOver();
      }

    },10*this.limit);
  }


}
