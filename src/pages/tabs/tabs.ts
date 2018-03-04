import { Component } from '@angular/core';

import { GamePage } from '../game/game';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SettingsPage;
  tab2Root = GamePage;

  constructor() {

  }
}
