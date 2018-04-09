import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsManagerService} from "../products-manager.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
    viewTimes: 0

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
  deleteProduct(){
    console.log("hit delete");
    this._productManager.deleteOneProduct(this.id);
    this._router.navigate(['productlist']);

  }
  goBack(){
    this._router.navigate(['productlist']);
  }

}
