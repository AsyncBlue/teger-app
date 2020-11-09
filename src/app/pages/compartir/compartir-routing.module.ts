import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirPage } from './compartir.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirPageRoutingModule {}
