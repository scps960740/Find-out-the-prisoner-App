import { GameChoosePage } from './../game-choose/game-choose';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoChoose(){
    this.navCtrl.push(GameChoosePage,null);
  }

}
