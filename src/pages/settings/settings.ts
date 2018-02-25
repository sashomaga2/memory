import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

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
      timeLimit: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  onSubmit(value: any): void {
    if(this.settingsForm.valid) {
      this.nav.push(AboutPage, value);
    }

    console.log("finally");
  }

}
