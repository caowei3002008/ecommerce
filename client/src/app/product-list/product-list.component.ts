import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductsManagerService} from "../products-manager.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  constructor(private _router: Router, private _productManager: ProductsManagerService) { }

  ngOnInit() {
    this.getList();
  }

  addProduct(){
    this._router.navigate(['createproduct']);
  }

  getList(){
    this._productManager.productList()
      .then((data) =>{
        this.products = data;
      })
      .catch((err)=>{
        console.log("catch", err);
      })
  }

}
