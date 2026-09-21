import { Service } from '@angular/core';

@Service()
export class Product {

 product = [
    { name: 'Coca Cola', stok: 0, HargaBeli: 8000, HargaJual: 10000, gambar: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//605/coca-cola_coca-cola-seru---12-x390-ml--_full02.jpg" },
    { name: 'Purbasari Lulus Mandi', stok: 5, HargaBeli: 10000, HargaJual: 15000 },
    { name: 'Indomie Goreng', stok: 15, HargaBeli: 3000, HargaJual: 5000, gambar: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1088129000&w=1920&q=75" },
    { name: 'Teh Pucuk', stok: 8, HargaBeli: 5000, HargaJual: 7000, gambar: "https://c.alfagift.id/product/1/1_A12790002396_20251114171244170_base.jpg" },
    { name: 'Silverqueen', stok: 3, HargaBeli: 20000, HargaJual: 23000, gambar: "https://c.alfagift.id/product/1/1_A11870001959_20251217151539220_base.jpg" },
    { name: 'Teh Botol', stok: 12, HargaBeli: 5000, HargaJual: 7000 },
    { name: 'Aqua', stok: 20, HargaBeli: 3000, HargaJual: 5000 },
    { name: 'Chitato', stok: 7, HargaBeli: 9000, HargaJual: 12000 },
    { name: 'Oreo', stok: 0, HargaBeli: 8000, HargaJual: 11000},
    { name: 'Lifebuoy', stok: 6, HargaBeli: 7000, HargaJual: 10000}
  ];

  addProduct(
    p_name: string,
    p_hargaBeli: number,
    p_hargaJual: number,
    p_stok: number
  ) {
    this.product.push({
      name: p_name,
      HargaBeli: p_hargaBeli,
      HargaJual: p_hargaJual,
      stok: p_stok
    });
  }
  
  updateProduct(
  id: number,
  p_name: string,
  p_hargaBeli: number,
  p_hargaJual: number,
  p_stok: number
) {
  this.product[id] = {
    ...this.product[id],
    name: p_name,
    HargaBeli: p_hargaBeli,
    HargaJual: p_hargaJual,
    stok: p_stok
  };
}

}
