import { Component, OnInit } from '@angular/core';
import {ProductsManagerService} from "../../products-manager.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  searchResults: String;
  products: any[];
  constructor(private _productManager: ProductsManagerService) { }

  ngOnInit() {
    this.getSeachProduct();
  }

  productSearch(){
    this._productManager.searchProduct(this.searchResults)
      .then((data) =>{
        this.products = data;
        console.log(this.products);
      })
      .catch((err) =>{
        console.log("catch",err);
      })
  }
  getSeachProduct(){
    return this.products;
  }

}
