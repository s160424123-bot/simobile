import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { TentangaplikasiPageRoutingModule } from './tentangaplikasi-routing.module';

import { TentangaplikasiPage } from './tentangaplikasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TentangaplikasiPageRoutingModule
  ],
  declarations: [TentangaplikasiPage]
})
export class TentangaplikasiPageModule {}
