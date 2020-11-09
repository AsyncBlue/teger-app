import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosEventoPage } from './datos-evento.page';

const routes: Routes = [
  {
    path: '',
    component: DatosEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosEventoPageRoutingModule {}
