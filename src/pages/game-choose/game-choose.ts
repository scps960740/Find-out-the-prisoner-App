import { GameStartPage } from './../game-start/game-start';
import { GameServeProvider } from './../../providers/game-serve/game-serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the GameChoosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-choose',
  templateUrl: 'game-choose.html',
})
export class GameChoosePage {

  public Count = "";
  public GameClass = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view : ViewController,
    public serve :GameServeProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameChoosePage');
    this.view.setBackButtonText('返回');
  }


  GameStart(){

    if(this.Count == "" || this.GameClass == ""){

      this.serve.showAlert('提醒','請選擇人數或類別','確定',null,false);

    }else{

      const mydata = {
        Count : this.Count,
        GameClass : this.GameClass
      }

      this.navCtrl.push(GameStartPage,{data:mydata});

    }

  }
}
