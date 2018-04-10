import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./Products/product-list/product-list.component";
import {ProductCreateComponent} from "./Products/product-create/product-create.component";
import {ProductDetailsComponent} from "./Products/product-details/product-details.component";
import {ProductEditComponent} from "./Products/product-edit/product-edit.component";
import {LoginPageComponent} from "./Users/login-page/login-page.component";
import {SignUpPageComponent} from "./Users/sign-up-page/sign-up-page.component";
import {MyAccountComponent} from "./Users/my-account/my-account.component";
import {ProfileComponent} from "./Users/profile/profile.component";
import {MainPageComponent} from "./mainProduct/main-page/main-page.component";

const routes: Routes = [
  {path:"", pathMatch: 'full', component: MainPageComponent},
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


