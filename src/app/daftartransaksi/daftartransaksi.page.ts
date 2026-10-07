import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../transaksi'; // Sesuai dengan nama class 'Transaksi' di service kamu

@Component({
  selector: 'app-daftartransaksi',
  templateUrl: './daftartransaksi.page.html',
  styleUrls: ['./daftartransaksi.page.scss'],
  standalone: false, // <-- Tambahkan baris ini agar cocok dengan modul NgModule
})
export class DaftarTransaksiPage implements OnInit {

  transaksiList: any[] = [];

  constructor(private transaksiService: Transaksi) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Menggunakan method getTransactions() yang ada di service
    this.transaksiList = this.transaksiService.getTransactions() || [];
  }

}