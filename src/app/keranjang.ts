import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Keranjang {
    cart: any[] = [];

    constructor() { }

    tambahKeKeranjang(product: any) {
        this.cart.push(product);
    }

    getCart() {
        return this.cart;
    }

}
