import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectorQRPageRoutingModule } from './lector-qr-routing.module';

import { LectorQRPage } from './lector-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorQRPageRoutingModule
  ],
  declarations: [LectorQRPage]
})
export class LectorQRPageModule {}
