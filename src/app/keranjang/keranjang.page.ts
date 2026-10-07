import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../transaksi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {

  cartItems: any[] = [];
  total: number = 0;

  constructor(
    private transaksiService: Transaksi,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  ionViewWillEnter() {
    this.loadCart();
  }

  loadCart() {

    this.cartItems = this.cartItems = [...this.transaksiService.getCart()];

    this.total = this.transaksiService.getTotalAmount();

    console.log('==============================');
    console.log('ISI CART DI KERANJANG:', this.cartItems);
    console.log('JUMLAH ITEM:', this.cartItems.length);

    this.cartItems.forEach((item, index) => {
      console.log(
        'Item ke-' + index,
        item.product.nama,
        'Jumlah:',
        item.quantity
      );
    });

    console.log('TOTAL:', this.total);
    console.log('==============================');
  }

  konfirmasiTransaksi() {

    if (this.cartItems.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }

    const savedTrx = this.transaksiService.checkout();

    console.log('Transaksi tersimpan:', savedTrx);

    this.router.navigate(['/transaksi']);
  }

}