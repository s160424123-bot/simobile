import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  
  constructor() {}
  produkTerlaris: string = '';
  jumlahProduk: number = 0;
  totalTransaksiHariIni: number = 0;

}
