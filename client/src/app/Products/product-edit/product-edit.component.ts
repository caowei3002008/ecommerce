import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsManagerService} from "./../../products-manager.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id = "";
  // product: any[];
  product = {
    name: "",
    category: "",
    price: "",
    description: "",
    reviews: [],
    quantity: "",
    storeLocated: "",
    viewTimes: 0,
    url: ""

  }
  constructor(private _route: ActivatedRoute, private _productManager: ProductsManagerService, private _router: Router) {
    this._route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      })
  }

  ngOnInit() {
    this.getOneProductDetails();
    console.log(this.id);
  }

  getOneProductDetails(){
    this._productManager.findOneProduct(this.id)
      .then((data) =>{
        this.product = data;
      })
      .catch((err) =>{
        console.log("catch", err);
      })
  }

  updateProduct(){
    this._productManager.updateProduct(this.product, this.id)
      .then((data) =>{
        this.product = data;
      })
      .catch((err) =>{
        console.log("catch", err);
      })
    this._router.navigate(['productlist']);
  }
  goBack(){
    this._router.navigate(['productlist']);
  }

}
