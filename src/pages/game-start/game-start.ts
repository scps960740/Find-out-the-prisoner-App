import { PeopleResultPage } from './../people-result/people-result';
import { GameServeProvider } from './../../providers/game-serve/game-serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the GameStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-start',
  templateUrl: 'game-start.html',
})
export class GameStartPage {

  public Thief;
  public Civilian;
  public White;

  public ThiefCount = 0;
  public CivilianCount = 0;
  public WhiteCount = 0;


  public Num1 = 0;

  public data;
  public Count;
  public GameClass;

  public GameArray=[];
  public GameResultArray = [];
  public GameBooleanArray = [];
  public GameResultArrayText = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public serve : GameServeProvider,
    public modal : ModalController,
    private alertCtrl: AlertController,
    public view :ViewController
  ) {

    this.data = this.navParams.get('data');
    this.Count = this.data.Count;
    this.GameClass = this.data.GameClass;
    console.log(this.Count + " " + this.GameClass);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameStartPage');
    this.view.setBackButtonText('返回');

    this.Num1 = this.getRandom(1,5);
    console.log(this.Num1);

    switch (this.GameClass) {

      case 'T1':{

        switch (this.Num1) {
            case 1:
              {

                this.Civilian = '蕭敬騰';
                this.Thief = '林俊傑';

              }
            break;
            case 2:
              {

                this.Civilian = '馬英九';
                this.Thief = '陳水扁';


              }
            break;
            case 3:
              {

                this.Civilian = '火影忍者';
                this.Thief = '海賊王';


              }
            break;
            case 4:
              {

                this.Civilian = '大S';
                this.Thief = '小S';


              }
            break;
            case 5:
              {

                this.Civilian = '吳宗憲';
                this.Thief = '庹宗康';


              }
            break;
      
        }

      }
        break;
      case 'T2':{

        switch (this.Num1) {
          case 1:
            {

              this.Civilian = '珍珠奶茶';
              this.Thief = '多多綠茶';


            }
          break;
          case 2:
            {

              this.Civilian = '臭豆腐';
              this.Thief = '臭臭鍋';


            }
          break;
          case 3:
            {

              this.Civilian = '西瓜';
              this.Thief = '芒果';


            }
          break;
          case 4:
            {

              this.Civilian = '拉麵';
              this.Thief = '陽春麵';


            }
          break;
          case 5:
            {

              this.Civilian = '橘子';
              this.Thief = '柳丁';


            }
          break;
    
      }

      }  
        break;
      case 'T3':{

        switch (this.Num1) {
          case 1:
            {

              this.Civilian = '颱風';
              this.Thief = '颶風';


            }
          break;
          case 2:
            {

              this.Civilian = '阿里山';
              this.Thief = '陽明山';


            }
          break;
          case 3:
            {

              this.Civilian = '嫦娥';
              this.Thief = '織女';


            }
          break;
          case 4:
            {

              this.Civilian = '日月潭';
              this.Thief = '七星潭';

            }
          break;
          case 5:
            {

              this.Civilian = '李白';
                this.Thief = '杜甫';


            }
          break;
    
      }

      }  
        break;
      case 'T4':{

        switch (this.Num1) {
          case 1:
            {

              this.Civilian = '馬桶';
                this.Thief = '小便斗';


            }
          break;
          case 2:
            {

              this.Civilian = '直升機';
                this.Thief = '戰鬥機';


            }
          break;
          case 3:
            {

              this.Civilian = '計程車';
                this.Thief = 'Uber';


            }
          break;
          case 4:
            {

              this.Civilian = '水餃';
                this.Thief = '水煎包';


            }
          break;
          case 5:
            {

              this.Civilian = '蛤蠣';
                this.Thief = '牡蠣';


            }
          break;
    
      }

      }  
        break;
  
    }


    switch(this.Count){

      case '6' :{

        this.GameArray = this.getRandomArray(1,6,6);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;

           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 6){

            this.GameResultArray[i] = '白板';
             
          }
        }

        console.log(this.GameResultArray,this.GameBooleanArray);

      }
      break ;

      case '7' :{

        this.GameArray = this.getRandomArray(1,7,7);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;

           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 7){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else{

            this.GameResultArray[i] = '白板';

          }
        }

        console.log(this.GameResultArray);
        
      }
      break ;

      case '8' :{

        this.GameArray = this.getRandomArray(1,8,8);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;

           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 7){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 8){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else{

            this.GameResultArray[i] = '白板';

          }
        }

        console.log(this.GameResultArray);
        
      }
      break ;

      case '9' :{

        this.GameArray = this.getRandomArray(1,9,9);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;

           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 7){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 8){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 9){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else{

            this.GameResultArray[i] = '白板';

          }
        }

        console.log(this.GameResultArray);
        
      }
      break ;

      case '10' :{

        this.GameArray = this.getRandomArray(1,10,10);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;
           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 7){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 8){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 9){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 10){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else{

            this.GameResultArray[i] = '白板';

          }
        }

        console.log(this.GameResultArray);
        
      }
      break ;

      case '11' :{

        this.GameArray = this.getRandomArray(1,11,11);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;
           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 7){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 8){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 9){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 10){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 11){

            this.GameResultArray[i] = '白板';
             
          }else{

            this.GameResultArray[i] = '白板';

          }
        }

        console.log(this.GameResultArray);
        
        
      }
      break ;

      case '12' :{

        this.GameArray = this.getRandomArray(1,12,12);
        for(let i = 0 ; i < this.GameArray.length ; i++){

          this.GameBooleanArray[i] = true;
           if(this.GameArray[i] == 1){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 2){

            this.GameResultArray[i] = '平民,' + this.Civilian;

           }else if(this.GameArray[i] == 3){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 4){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 5){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 7){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else if(this.GameArray[i] == 8){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 9){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 10){

            this.GameResultArray[i] = '平民,' + this.Civilian;
             
          }else if(this.GameArray[i] == 11){

            this.GameResultArray[i] = '白板';
             
          }else if(this.GameArray[i] == 12){

            this.GameResultArray[i] = '臥底,' + this.Thief;
             
          }else{

            this.GameResultArray[i] = '白板';

          }
        }

        console.log(this.GameResultArray);
        
      }
      break ;

    }
   

  }


  getRandom(minNum, maxNum){	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
    return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
  }

  getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
    var rdmArray = [n];		//儲存產生的陣列
   
    for(var i=0; i<n; i++) {
      var rdm = 0;		//暫存的亂數
   
      do {
        var exist = false;			//此亂數是否已存在
        rdm = this.getRandom(minNum, maxNum);	//取得亂數
   
        //檢查亂數是否存在於陣列中，若存在則繼續回圈
        if(rdmArray.indexOf(rdm) != -1) exist = true;
   
      } while (exist);	//產生沒出現過的亂數時離開迴圈
   
      rdmArray[i] = rdm;
    }
    return rdmArray;
  }

  Show(i){

    if(this.GameBooleanArray[i] == true){

      let actionSheet = this.actionSheetCtrl.create({
        buttons: [
          {
            text: '查看題目',
            handler: () => {
  
              this.serve.showAlert('題目',this.GameResultArray[i].split(",")[1],'確定',null,false);
              
            }
          },
          {
            text: '淘汰',
            handler: () => {
              let alert = this.alertCtrl.create({
                title: '提醒',
                message: '確定淘汰？?',
                buttons: [
                  {
                    text: '取消', 
                    handler: () => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: '確定',
                    handler: () => {
    
                      this.GameBooleanArray[i] = false;

                      if(this.GameResultArray[i].split(',')[0] == '平民'){

                        this.CivilianCount = this.CivilianCount + 1;

                      }else if(this.GameResultArray[i].split(',')[0] == '臥底'){

                        this.ThiefCount = this.ThiefCount + 1;

                      }

                      this.WhoWin();

                     
                    }
                  }
                ]
              });
              alert.present();
              
            }
          },
          {
            text: '取消',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
   
      actionSheet.present();

    }else{
      this.serve.showAlert('提醒','你已被淘汰ＧＧ','確定',null,false);
    }
    
  }

  ShowAll(){

    let actionSheet = this.actionSheetCtrl.create({

      title: '確定使用此功能？',
      buttons: [
        {
          text: '確定',
          handler: () => {

              const mydata = {

                array : this.GameResultArray

              }
              const modal = this.modal.create(PeopleResultPage,{data : mydata});
              modal.present();
              //this.serve.showAlert('主持人視角',this.GameResultArrayText,'確定',null,false);
                      
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();

  }

  WhoWin(){
    switch (this.Count) {
      case '6':

        if(this.CivilianCount == 4){

          this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
            this.navCtrl.pop();
          },false);

        }else if(this.ThiefCount == 1){

          this.serve.showAlert('提醒','平民勝利！','確定',()=>{
            this.navCtrl.pop();
          },false);

        }
        
        break;
      case '7':

      if(this.CivilianCount == 4){

        this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }else if(this.ThiefCount == 2){

        this.serve.showAlert('提醒','平民勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }
        
        break;
      case '8':

      if(this.CivilianCount == 5){

        this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }else if(this.ThiefCount == 2){

        this.serve.showAlert('提醒','平民勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }
        
        break;
      case '9':

      if(this.CivilianCount == 6){

        this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }else if(this.ThiefCount == 2){

        this.serve.showAlert('提醒','平民勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }
        
        break;
      case '10':

      if(this.CivilianCount == 7){

        this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }else if(this.ThiefCount == 2){

        this.serve.showAlert('提醒','平民勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }
        
        break;
      case '11':

      if(this.CivilianCount == 7){

        this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }else if(this.ThiefCount == 2){

        this.serve.showAlert('提醒','平民勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }
        
        break;
      case '12':

      if(this.CivilianCount == 7){

        this.serve.showAlert('提醒','臥底勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }else if(this.ThiefCount == 3){

        this.serve.showAlert('提醒','平民勝利！','確定',()=>{
          this.navCtrl.pop();
        },false);

      }
        
        break;
   
    }
  }

}
