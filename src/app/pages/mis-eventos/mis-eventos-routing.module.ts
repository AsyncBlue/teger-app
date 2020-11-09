import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEventosPage } from './mis-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: MisEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEventosPageRoutingModule {}
