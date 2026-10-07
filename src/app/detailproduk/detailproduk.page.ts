import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../product';
import { Transaksi } from '../transaksi';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  id: any;
  products: any;
  jumlah: number = 1;

  constructor(private route: ActivatedRoute, private transaksi: Transaksi, private product: Product, private router: Router) { }

 ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.products = this.product.products[this.id];
    });

  }

  tambahKeranjang() {
    if (!this.products) {
      alert('Produk tidak ditemukan!');
      return;
    } 

    if (this.jumlah > this.products.stok) {
      alert('Jumlah yang dipilih melebihi stok');
      return;
    }

    const produkFormatted = {
      nama: this.products.name,
      HargaJual: this.products.HargaJual
    };

    this.transaksi.addToCart(produkFormatted, this.jumlah);
   
    this.products.stok -= this.jumlah;

     this.router.navigate(['/keranjang']);
   
  }
}
