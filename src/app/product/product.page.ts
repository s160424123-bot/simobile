import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {

  constructor(private productservice: Product) { }
  
  product = [
    { name: 'Coca Cola', stok: 10, price: 8000 },
    { name: 'Purbasari Lulus Mandi', stok: 5, price: 10000 },
    { name: 'Indomie Goreng', stok: 15, price: 3000 },
    { name: 'Teh Pucuk', stok: 8, price: 5000 },
    { name: 'Silverqueen', stok: 3, price: 20000 },
    { name: 'Teh Botol', stok: 12, price: 5000 },
    { name: 'Aqua', stok: 20, HargaBeli: 3000, HargaJual: 5000 },
    { name: 'Chitato', stok: 7, HargaBeli: 9000, HargaJual: 12000 },
    { name: 'Oreo', stok: 0, HargaBeli: 8000, HargaJual: 11000},
    { name: 'Lifebuoy', stok: 6, HargaBeli: 7000, HargaJual: 10000}
  ];

  // filterProduk = this.product;
  // searchTerm: string = '';

  // filterProducts() {
  //   this.filterProduk = this.product.filter(product =>
  //     product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  ngOnInit() {
  }

}
