import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GameChoosePage } from '../pages/game-choose/game-choose';
import { GameServeProvider } from '../providers/game-serve/game-serve';
import { HttpClientModule } from '@angular/common/http';
import { GameStartPage } from '../pages/game-start/game-start';
import { PeopleResultPage } from '../pages/people-result/people-result';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameChoosePage,
    GameStartPage,
    PeopleResultPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameChoosePage,
    GameStartPage,
    PeopleResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameServeProvider
  ]
})
export class AppModule {}
