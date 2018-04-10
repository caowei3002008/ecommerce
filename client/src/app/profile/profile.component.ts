import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    username: "",
    password: "",
    email: "",
    admin: false,
    paymentMethod: [],
    addressBook: [],
    orderHistories: []
  }
  id: String;
  constructor(private _usersService:UsersService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(
      params =>{
        this.id = params.get("id");
      }
    )
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this._usersService.getUserInfoById(this.id)
      .then((data) =>{
        this.user = data;
      })
      .catch( (err) =>{
        console.log("catch", err);
      })
  }

  profilePageEdit(){
    this._usersService.updatePersonalProfile(this.user);
    this._router.navigate(['myaccount',this.user.username]);
  }

}
