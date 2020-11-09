import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnirsePageRoutingModule } from './unirse-routing.module';

import { UnirsePage } from './unirse.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnirsePageRoutingModule,
    ComponentsModule
  ],
  declarations: [UnirsePage]
})
export class UnirsePageModule {}
