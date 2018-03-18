import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavParams } from 'ionic-angular';
import { SettingsService, ISettings } from '../services/settingsService';

export function GamePlayServiceFactory(settingsService: SettingsService) {
  console.log("gamePlayServiceFactory", settingsService);
  const settings = settingsService.settings;
  if (settings.name === "g1") {
    return new GameplayService(settings);
  }

  return new Gameplay2Service(settings);
};


export interface IGameplayService {
  
}

@Injectable()
export class GameplayService implements IGameplayService {
  constructor(settings: ISettings) {
    console.log("GameplayService constructor", settings);
  }

  test() {
    console.log("GameplayService");
  }

}

@Injectable()
export class Gameplay2Service implements IGameplayService {
  constructor(settings: ISettings) {
    console.log("GameplayService2 constructor", settings);
  }

  test() {
    console.log("GameplayService2");
  }

}
