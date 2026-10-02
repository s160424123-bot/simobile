import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {
  products: any[] = [];  

  constructor(private product: Product) { }

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
     this.products = this.product.products;
  }

}
