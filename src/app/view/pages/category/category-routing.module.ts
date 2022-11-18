import { Role } from './../../../constant/Role';
import { AuthGuard } from './../../../core/auth.guard';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'cat', component: CategoryComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
  constructor(){
    console.log('category start')
  }
}
