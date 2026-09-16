import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,
})
export class ProductPage implements OnInit {

  constructor() { }

  product = [
    { name: 'Coca Cola', price: 8000 },
    { name: 'Purbasari Lulus Mandi', price: 10000},
    { name: 'Indomie Goreng', price: 3000 },
    { name: 'Teh Pucuk', price: 5000 },
    { name: 'Silverqueen', price: 20000 },
    { name: 'Teh Botol', price: 5000},];

    filterProduk = this.product;
    searchTerm: string = '';
    
    filterProducts() {
      this.filterProduk = this.product.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
  ngOnInit() {
  }

}
