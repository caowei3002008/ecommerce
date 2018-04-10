import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ProductEditComponent } from './Products/product-edit/product-edit.component';
import { ProductCreateComponent } from './Products/product-create/product-create.component';
import {ProductsManagerService} from "./products-manager.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { LoginPageComponent } from './Users/login-page/login-page.component';
import { SignUpPageComponent } from './Users/sign-up-page/sign-up-page.component';
import { MyAccountComponent } from './Users/my-account/my-account.component';
import {UsersService} from "./users.service";
import { ProfileComponent } from './Users/profile/profile.component';
import { MainPageComponent } from './mainProduct/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    LoginPageComponent,
    SignUpPageComponent,
    MyAccountComponent,
    ProfileComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductsManagerService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
