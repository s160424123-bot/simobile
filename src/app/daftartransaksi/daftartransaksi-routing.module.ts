import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarTransaksiPage } from './daftartransaksi.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarTransaksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarTransaksiPageRoutingModule {}
