import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteraccionesPage } from './interacciones.page';

const routes: Routes = [
  {
    path: '',
    component: InteraccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteraccionesPageRoutingModule {}
