import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path:'shared', loadChildren:() => import('./view/shared/shared.module').then(m => m.SharedModule)},
  {path:'', loadChildren:()=> import('./view/pages/home/home.module').then(m => m.HomeModule)},
  {path:'', loadChildren:() => import('./view/pages/contact-us/contact-us.module').then(m=> m.ContactUsModule)},
  {path:'', loadChildren:() => import('./view/pages/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path:'', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'', loadChildren:() => import('./view/pages/category/category.module').then(m => m.CategoryModule)},
  {path:'', loadChildren:() => import('./view/pages/product/product.module').then(m => m.ProductModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
