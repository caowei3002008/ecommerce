import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  createAccount(newUser){
    return this._http.post('/user/create', newUser).map(
      Response => Response.json()).toPromise();
  }

  loginAccount(user){
    return this._http.post('/user/login', {username: user.username, password: user.password}).map(
      Response => Response.json()).toPromise();  }

      getUserInfo(aUser){
        return this._http.post('/user/findUser', {username: aUser}).map(
          Response => Response.json()).toPromise();
      }

}
