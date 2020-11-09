import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosEventoPageRoutingModule } from './datos-evento-routing.module';

import { DatosEventoPage } from './datos-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosEventoPageRoutingModule
  ],
  declarations: [DatosEventoPage]
})
export class DatosEventoPageModule {}
