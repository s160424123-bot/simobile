import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  produkTerlaris: string = '';
  jumlahProduk: number = 0;
  totalTransaksiHariIni: number = 0;
  constructor() { }
  
  ngOnInit() {
  }

}
