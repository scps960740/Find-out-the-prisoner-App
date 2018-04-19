import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameStartPage } from './game-start';

@NgModule({
  declarations: [
    GameStartPage,
  ],
  imports: [
    IonicPageModule.forChild(GameStartPage),
  ],
})
export class GameStartPageModule {}
