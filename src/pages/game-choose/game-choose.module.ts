import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameChoosePage } from './game-choose';

@NgModule({
  declarations: [
    GameChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(GameChoosePage),
  ],
})
export class GameChoosePageModule {}
