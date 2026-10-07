import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { DaftarTransaksiPageRoutingModule } from './daftartransaksi-routing.module';

import { DaftarTransaksiPage } from './daftartransaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarTransaksiPageRoutingModule
  ],
  declarations: [DaftarTransaksiPage]
})
export class DaftarTransaksiPageModule {}
