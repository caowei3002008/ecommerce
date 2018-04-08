import { Component, OnInit } from '@angular/core';
import {ProductsManagerService} from "../products-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = {
    name: "",
    category: "",
    price: "",
    description: "",
    reviews: [],
    quantity: "",
    storeLocated: "",
    viewTimes: 0

  }

  constructor(private _productManager: ProductsManagerService, private _router: Router) { }

  ngOnInit() {
  }
  submitNewProduct(){
    this._productManager.addProduct(this.product);
    this._router.navigate(['']);

  }

}
