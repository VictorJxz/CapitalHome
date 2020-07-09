import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms/forms';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userModel = new UserModel();
  remember = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitAuthentication(form: NgForm){

    if ( form.invalid ) {return}
  }

}
