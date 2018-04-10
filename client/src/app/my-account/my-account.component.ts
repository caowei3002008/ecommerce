import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user = {
    username: "",
    password: "",
    email: "",
    admin: false,
    paymentMethod: [],
    addressBook: [],
    orderHistories: []
  };
  username= "";
  constructor(private _route: ActivatedRoute, private _usersService: UsersService, private _router: Router) {
    this._route.paramMap.subscribe(
    params =>{
      this.username = params.get("username");
    }
    )
  }


  ngOnInit() {
    this.getUserInfo();
    console.log(this.user);
  }
  getUserInfo(){
    this._usersService.getUserInfo(this.username)
      .then((data) =>{
          this.user = data;
      })
      .catch( (err) =>{
        console.log("catch", err);
      })
  }
  advanceToProductManager(){
    this._router.navigate(['productlist']);
  }

}
