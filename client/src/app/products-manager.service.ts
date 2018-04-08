import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsManagerService {
  products: any[];
  constructor(private _http: Http) { }

  addProduct(aProduct){
    return this._http.post('/product/add', aProduct).map(
      Response => Response.json()).toPromise();
  }

  productList(){
    return this._http.get('/product/getlist').map(
      Response => Response.json()).toPromise();
  }
}
