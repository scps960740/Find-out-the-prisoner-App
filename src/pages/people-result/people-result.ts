import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the PeopleResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people-result',
  templateUrl: 'people-result.html',
})
export class PeopleResultPage {

  public data;
  public Rarray = [];

  constructor(
    public navCtrl: NavController, public navParams: NavParams ,public view :ViewController) {


    this.data = this.navParams.get('data');
    this.Rarray = this.data.array;
    console.log(this.Rarray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleResultPage');

  }

  Close(){
    this.view.dismiss();
  }

}
