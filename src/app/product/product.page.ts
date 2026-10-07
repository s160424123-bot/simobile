import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../transaksi'; // <-- PERBAIKAN: Import service Transaksi yang benar
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {
  products: any[] = [];  

constructor(
    private product: Product,
    private transaksiService: Transaksi
  ) {}

  filterProduk: any[] = [];
  searchTerm: string = '';

   filterProducts() {
    this.filterProduk = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  ngOnInit() {
     this.products = this.product.products;
      this.filterProduk = this.products;
  }

  tambahKeranjang(p: any){
    const produkFormatted = {
      id: p.id || p.name,
      nama: p.name,
      hargaJual: p.hargaJual || p.HargaJual || p.price || 0
    }

    this.transaksiService.addToCart(produkFormatted, 1);
    alert(p.name + ' berhasil ditambahkan ke keranjang!');
  }
}