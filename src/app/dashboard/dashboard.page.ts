import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../transaksi';
import { Product } from '../product';

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

  constructor(
    private productService: Product,
    private transaksiService: Transaksi
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {

    // ambil data transaksi
    const transactions = this.transaksiService.getTransactions();
    console.log('TRANSAKSI DI DASHBOARD:', transactions);
    console.log('JUMLAH TRANSAKSI:', transactions.length);

<<<<<<< HEAD
    const hariIni = new Date();

    this.totalTransaksiHariIni = transactions.filter(transaksi => {
      const tanggalTransaksi = new Date(transaksi.date);

      return tanggalTransaksi.getDate() === hariIni.getDate() &&
        tanggalTransaksi.getMonth() === hariIni.getMonth() &&
        tanggalTransaksi.getFullYear() === hariIni.getFullYear();
    }).length;
=======
    // hitung jumlah produk yang sudah terjual
    this.jumlahProduk = 0;
>>>>>>> bb9c249 (Update Dasboard)

    transactions.forEach(transaksi => {
      transaksi.items.forEach(item => {
        this.jumlahProduk += item.quantity;
      });
    });

    // hitung total transaksi hari ini
    const hariIni = new Date().toDateString();

    this.totalTransaksiHariIni = transactions.filter(
      transaksi => new Date(transaksi.date).toDateString() === hariIni
    ).length;

    // hitung jumlah produk yang terjual
    let jumlahTerjual: any = [];

    transactions.forEach(transaksi => {
      transaksi.items.forEach(item => {

        const namaProduk = item.product.name || item.product.nama;

        if (jumlahTerjual[namaProduk]) {
          jumlahTerjual[namaProduk] += item.quantity;
        } else {
          jumlahTerjual[namaProduk] = item.quantity;
        }

      });
    });

    // cari produk dengan jumlah penjualan terbanyak
    let produkTerlaris = '-';
    let jumlahTerbanyak = 0;

    for (let namaProduk in jumlahTerjual) {

      if (jumlahTerjual[namaProduk] > jumlahTerbanyak) {
        jumlahTerbanyak = jumlahTerjual[namaProduk];
        produkTerlaris = namaProduk;
      }

    }

    this.produkTerlaris = produkTerlaris;
  }

}