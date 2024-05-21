import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussolaPage } from './bussola.page';

const routes: Routes = [
  {
    path: '',
    component: BussolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussolaPageRoutingModule {}
