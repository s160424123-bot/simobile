import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../product';
@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  id = 0;
  product: any[] = [];

  

  constructor(
    private route: ActivatedRoute,
    private productservice: Product) { }

  ngOnInit() {
    this.product = this.productservice.product;
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  tambahKeranjang() {
    alert('Produk ditambahkan ke keranjang');
  }
}
