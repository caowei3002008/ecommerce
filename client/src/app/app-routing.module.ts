import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

const routes: Routes = [
  {path:"", redirectTo:"/productlist", pathMatch: 'full'},
  {path: "productlist", component: ProductListComponent},
      {path:'createproduct', component: ProductCreateComponent},
      {path:'detailsproduct/:id', component: ProductDetailsComponent},
      {path:'editproduct/:id', component: ProductEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
