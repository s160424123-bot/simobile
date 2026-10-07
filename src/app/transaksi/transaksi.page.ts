import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../transaksi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  daftarTransaksi: any[]= [];

  constructor(
    private transaksiServices: Transaksi
  ) { }

  ngOnInit() {
    this.loadRiwayat();
  }

  ionViewWillEnter() {
    this.loadRiwayat();
  }

  loadRiwayat() {
    this.daftarTransaksi = this.transaksiServices.getTransactions();
  }
}
