import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then(m => m.PengaturanPageModule)
  },
  {
    path: '',
    redirectTo: 'pengaturan',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesPageModule)
  },

  {
    path: 'tabs',
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
      { path: 'pengaturan', loadChildren: () => import('./pengaturan/pengaturan.module').then(m => m.PengaturanPageModule) },  
     
    ]
  },

  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then(m => m.TransaksiPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then(m => m.PengaturanPageModule)
  },
  {
    path: 'tentangaplikasi',
    loadChildren: () => import('./tentangaplikasi/tentangaplikasi.module').then(m => m.TentangaplikasiPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
  path: 'detailproduk/:id',
  loadChildren: () => import('./detailproduk/detailproduk.module').then(m => m.DetailprodukPageModule)
  },
  {
    path: 'newproduk',
    loadChildren: () => import('./newproduk/newproduk.module').then( m => m.NewprodukPageModule)
  },
  {
    path: 'editproduk/:id',
    loadChildren: () => import('./editproduk/editproduk.module').then( m => m.EditprodukPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
