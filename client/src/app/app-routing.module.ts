import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch: 'full'},
  {path: "productlist", component: ProductListComponent},
  {path:'createproduct', component: ProductCreateComponent},
  {path:'detailsproduct/:id', component: ProductDetailsComponent},
  {path:'editproduct/:id', component: ProductEditComponent},
  {path:'login', component: LoginPageComponent},
  {path:'signup', component: SignUpPageComponent},
  {path:'myaccount/:username', component: MyAccountComponent},
  {path:'myaccount/:username/profile/:id', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


