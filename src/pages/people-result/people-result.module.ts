import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleResultPage } from './people-result';

@NgModule({
  declarations: [
    PeopleResultPage,
  ],
  imports: [
    IonicPageModule.forChild(PeopleResultPage),
  ],
})
export class PeopleResultPageModule {}
