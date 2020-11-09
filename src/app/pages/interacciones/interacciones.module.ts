import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteraccionesPageRoutingModule } from './interacciones-routing.module';

import { InteraccionesPage } from './interacciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteraccionesPageRoutingModule
  ],
  declarations: [InteraccionesPage]
})
export class InteraccionesPageModule {}
