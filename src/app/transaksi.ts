import { Injectable } from '@angular/core';

export interface CartItem {
  product: any;
  quantity: number;
}

export interface Transaction {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class Transaksi {

  private cart: CartItem[] = [];
  private transactions: Transaction[] = [];

  constructor() {}

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: any, quantity: number = 1) {

    const existing = this.cart.find(
      item => item.product.nama === product.nama
    );

    if (existing) {

      existing.quantity += quantity;

    } else {

      this.cart.push({
        product: product,
        quantity: quantity
      });

    }

    console.log('================================');
    console.log('Produk ditambahkan:', product.nama);
    console.log('Jumlah:', quantity);
    console.log('Isi keranjang:', this.cart);
    console.log('Jumlah item:', this.cart.length);
    console.log('================================');
  }

  getTotalAmount(): number {
    return this.cart.reduce(
      (sum, item) =>
        sum + (item.product.HargaJual * item.quantity),
      0
    );
  }

  checkout(): Transaction {

    const newTransaction: Transaction = {
      id: 'TRX-' + Date.now().toString().slice(-6),
      date: new Date().toISOString(),
      items: [...this.cart],
      totalAmount: this.getTotalAmount()
    };

    this.transactions.unshift(newTransaction);

    this.clearCart();

    return newTransaction;
  }

  clearCart() {
    this.cart = [];
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getTransactionById(id: string): Transaction | undefined {
    return this.transactions.find(t => t.id === id);
  }
}