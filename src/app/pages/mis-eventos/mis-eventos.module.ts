import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEventosPageRoutingModule } from './mis-eventos-routing.module';

import { MisEventosPage } from './mis-eventos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEventosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisEventosPage]
})
export class MisEventosPageModule {}
