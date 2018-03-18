import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GamePage } from '../pages/game/game';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { TimerComponent } from '../components/timer/timer'
import { KeypadComponent } from '../components/keypad/keypad'
import { BoxComponent } from '../components/box/box'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GamePlayServiceFactory, GameplayService } from '../services/gameplayService';
import { SettingsService } from '../services/settingsService';
import { NavController, NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    SettingsPage,
    TabsPage,
    TimerComponent,
    KeypadComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsService,
    // game play service factory
    {
      provide: "IGameplayService",
      useFactory: GamePlayServiceFactory,
      deps: [SettingsService],
      multi: true
    }
  ]
})
export class AppModule {}
