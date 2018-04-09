import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private _router: Router, private _userService: UsersService) { }

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

  backToSignIn(){
    this._router.navigate(['login']);
  }

  creatAccount(){
    this._userService.createAccount(this.user);
    this._router.navigate(['login']);
  }



}
