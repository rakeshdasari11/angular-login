import { Role } from './../../../constant/Role';
import { AuthGuard } from './../../../core/auth.guard';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'pro', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

  constructor(){
    console.log('product start')
  }
}
