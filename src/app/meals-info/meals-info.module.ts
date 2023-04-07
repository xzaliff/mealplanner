import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealsInfoPageRoutingModule } from './meals-info-routing.module';

import { MealsInfoPage } from './meals-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsInfoPageRoutingModule
  ],
  declarations: [MealsInfoPage]
})
export class MealsInfoPageModule {}
