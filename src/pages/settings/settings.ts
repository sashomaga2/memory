import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GamePage } from '../game/game';
import { SettingsService, ISettings } from "../../services/settingsService";

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  settingsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public nav: NavController, public settingsService: SettingsService) {
    this.settingsForm = formBuilder.group({
      count: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      secondsLimit: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      name: "g1"
    });
  }

  // TODO use service to save data between routes

  onSubmit(value: ISettings): void {
    if (this.settingsForm.valid) {
      this.settingsService.settings = value;
      this.nav.push(GamePage, value);
    }
  }

}
