import { Injectable } from '@angular/core';

export interface ISettings {
  count: number,
  secondsLimit: number,
  name: string
}

@Injectable()
export class SettingsService {

  private _settings: ISettings;

  public set settings(value: ISettings) {
    this._settings = Object.assign({}, value);
  }

  public get settings(): ISettings {
    return Object.assign({}, this._settings);
  }
  
}
