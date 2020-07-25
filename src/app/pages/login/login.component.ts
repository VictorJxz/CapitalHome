import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms/forms';
import { UserModel } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userModel = new UserModel();
  remember = false;

  constructor( private auth: AuthenticationService,private router: Router ) { }

  ngOnInit(): void {

    if ( localStorage.getItem('email') ) {
      this.userModel.email = localStorage.getItem('email');
      this.remember = true;
    }
  }

  onSubmitAuthentication(form: NgForm){

    if ( form.invalid ) {return}

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info'
    });

    Swal.showLoading();

    this.auth.login( this.userModel ).subscribe( response => {
      
      Swal.close();
      if ( this.remember ) {
        localStorage.setItem('email',this.userModel.email)
      }
      this.router.navigateByUrl('/home');

    }, (err) => {

      Swal.fire({
        text: err.error.error.message,
        icon: 'error'
      });
      
    });
  }

}
