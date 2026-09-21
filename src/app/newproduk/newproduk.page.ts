import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduk',
  templateUrl: './newproduk.page.html',
  styleUrls: ['./newproduk.page.scss'],
  standalone: false,
})
export class NewprodukPage implements OnInit {

  new_name: string = '';
  new_hargaBeli: number = 0;
  new_hargaJual: number = 0;
  new_stok: number = 0;

  constructor(private productservice: Product, private route: Router) {}


  ngOnInit() {
  }

   submitproduk()
  {
     if (this.new_name == '') {
    alert('Nama produk wajib diisi');
    return;
  }

  if (this.new_hargaBeli <= 0) {
    alert('Harga beli harus lebih dari 0');
    return;
  }

  if (this.new_hargaJual <= 0) {
    alert('Harga jual harus lebih dari 0');
    return;
  }

  if (this.new_stok < 0) {
    alert('Stok tidak boleh kurang dari 0');
    return;
  }

    this.productservice.addProduct(
      this.new_name,
      this.new_hargaBeli,
      this.new_hargaJual,
      this.new_stok
      
    );
    this.route.navigate(['/product']);

  }
}