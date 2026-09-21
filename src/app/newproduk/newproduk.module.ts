import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { NewprodukPageRoutingModule } from './newproduk-routing.module';

import { NewprodukPage } from './newproduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewprodukPageRoutingModule
  ],
  declarations: [NewprodukPage]
})
export class NewprodukPageModule {}
