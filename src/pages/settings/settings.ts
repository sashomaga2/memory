import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  settingsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public nav: NavController) {
    this.settingsForm = formBuilder.group({
      count: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      secondsLimit: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  onSubmit(value: any): void {
    if(this.settingsForm.valid) {
      this.nav.push(GamePage, value);
    }
  }

}
