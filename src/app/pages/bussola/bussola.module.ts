import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BussolaPageRoutingModule } from './bussola-routing.module';

import { BussolaPage } from './bussola.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [BussolaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussolaPageRoutingModule,
    HeaderModule
  ],
})
export class BussolaPageModule {}
