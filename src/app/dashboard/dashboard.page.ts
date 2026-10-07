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
  constructor(private productService: Product, private transaksiService: Transaksi) { }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    const products = this.productService.getProducts();
    this.jumlahProduk = products.length;

    const transactions = this.transaksiService.getTransactions();

    const hariIni = new Date().toDateString();
    this.totalTransaksiHariIni = transactions.filter(transaksi => new Date(transaksi.date).toDateString() === hariIni).length;

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
