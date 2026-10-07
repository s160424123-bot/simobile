import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () =>
      import('./transaksi/transaksi.module').then(m => m.TransaksiPageModule)
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'keranjang',
    loadChildren: () =>
      import('./keranjang/keranjang.module').then(m => m.KeranjangPageModule)
  },
  {
    path: 'newproduk',
    loadChildren: () =>
      import('./newproduk/newproduk.module').then(m => m.NewprodukPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () =>
      import('./pengaturan/pengaturan.module').then(m => m.PengaturanPageModule)
  },
  {
    path: 'tentangaplikasi',
    loadChildren: () =>
      import('./tentangaplikasi/tentangaplikasi.module').then(m => m.TentangaplikasiPageModule)
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'detailproduk/:id',
    loadChildren: () =>
      import('./detailproduk/detailproduk.module').then(m => m.DetailprodukPageModule)
  },
  {
    path: 'editproduk/:id',
    loadChildren: () =>
      import('./editproduk/editproduk.module').then(m => m.EditprodukPageModule)
  },
  {
    path: 'detailtransaksi/:id',
    loadChildren: () =>
      import('./detailtransaksi/detailtransaksi.module').then(m => m.DetailtransaksiPageModule)
  },
  {
    path: 'daftartransaksi',
    loadChildren: () =>
      import('./daftartransaksi/daftartransaksi.module').then(m => m.DaftarTransaksiPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }