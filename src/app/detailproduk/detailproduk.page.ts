import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../product';
import { Keranjang } from '../keranjang';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  id = 0;
  products: any[] = [];

  constructor(private route: ActivatedRoute, private keranjang: Keranjang, private product: Product) { }

  ngOnInit() {
    this.products = this.product.products;

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

  }

  tambahKeranjang() {
    this.keranjang.tambahKeKeranjang(this.products[this.id]);
    this.products[this.id].stok--;
    console.log(this.keranjang.getCart());
    alert('Produk ditambahkan ke keranjang');
  }
}
