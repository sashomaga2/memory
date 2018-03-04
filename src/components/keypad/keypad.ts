import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

enum Command {
  Clear = "C",
  Exit = "E"
}

/**
 * Generated class for the KeypadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'keypad',
  templateUrl: 'keypad.html'
})
export class KeypadComponent implements OnInit, OnDestroy{

  public value: string = "";

  constructor() {

  }

  @Input() onUpdate: Function;
  @Input() onClean:  Subject<any>;

  ngOnInit() {
    this.onClean.subscribe(event => {
      this.value = '';
    });
  }

  ngOnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.onClean.unsubscribe();
  }

  onKeyTap(val:string) : void {
    let handleKey: Function;

    if(isNaN(parseInt(val))) {
      handleKey = this.handleCommand.bind(this);
    } else {
      handleKey = this.handleNumber.bind(this);
    }

    const shouldUpdate : boolean = handleKey(val);

    if(shouldUpdate) {
      this.onUpdate(this.value);
    }
  }

  handleNumber(val: String) : boolean {
    if(this.value === '0') {
      this.value = '';
    }
    this.value += val;

    return true
  }

  handleCommand(val: Command) : boolean {
    if(val === Command.Clear) {
      this.value = "0";
      return false;
    }else if(val === Command.Exit) {
      this.value = "";
    }

    return true;
  }
}
