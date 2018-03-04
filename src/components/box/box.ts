import { Component, Input } from '@angular/core';
import { BoundCallbackObservable } from "../../../node_modules/rxjs/observable/BoundCallbackObservable";

export enum BoxState {
  Closed = 0,
  Open = 1,
  Selected = 2,
  Error = 3
}

export interface IBox {
  value: number, state: BoxState, interaction: number
}

/**
 * Generated class for the BoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'box',
  templateUrl: 'box.html',
  // styleUrls: ['components/box/box.scss'] IONIC has no style urls !!!
})
export class BoxComponent {
  @Input() box: IBox;

  get value() {
    const state = this.box.state;

    if(state === BoxState.Selected) {
      const interaction = this.box.interaction;
      return interaction < 0 ? `- ${(interaction * -1)}` : `+ ${interaction}`;
    } else if(state === BoxState.Closed) {
      return null;
    }

    return this.box.value;
  }

  getBoxClass() : string {
    return `box box-${BoxState[this.box.state].toLowerCase()}`;
  }
}
