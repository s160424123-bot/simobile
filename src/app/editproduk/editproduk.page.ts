import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../product';

@Component({
  selector: 'app-editproduk',
  templateUrl: './editproduk.page.html',
  styleUrls: ['./editproduk.page.scss'],
  standalone: false,
})
export class EditprodukPage implements OnInit {
   id = 0;

  new_name: string = '';
  new_hargaBeli: number = 0;
  new_hargaJual: number = 0;
  new_stok: number = 0;

  constructor(    private route: ActivatedRoute,
    private productservice: Product,
  private router: Router) { }

  ngOnInit() {this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.new_name = this.productservice.product[this.id].name;
      this.new_hargaBeli = this.productservice.product[this.id].HargaBeli;
      this.new_hargaJual = this.productservice.product[this.id].HargaJual;
      this.new_stok = this.productservice.product[this.id].stok;
    });
  }

    updateproduk() {

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

    this.productservice.updateProduct(
      this.id,
      this.new_name,
      this.new_hargaBeli,
      this.new_hargaJual,
      this.new_stok
    );

    alert('Produk berhasil diubah');
    this.router.navigate(['/product']);
  }

}
