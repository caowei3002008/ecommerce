import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {ProductsManagerService} from "./products-manager.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductsManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
