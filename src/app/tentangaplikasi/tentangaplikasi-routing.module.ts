import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentangaplikasiPage } from './tentangaplikasi.page';

const routes: Routes = [
  {
    path: '',
    component: TentangaplikasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentangaplikasiPageRoutingModule {}
