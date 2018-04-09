import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _router: Router, private _usersService: UsersService) { }
  user = {
    username: "",
    password: "",
    email: "",
    admin: false,
    paymentMethod: [],
    addressBook: [],
    orderHistories: []
  }

  ngOnInit() {
  }

  newAccount(){
    this._router.navigate(['signup']);
  }

  signIn(){
    this._usersService.loginAccount(this.user)
    .then((data) =>{
      console.log("Success!")
      this._router.navigate(['myaccount', this.user.username]);
    })
      .catch((err) =>{
        console.log("catch", err);
      })
  }

}
