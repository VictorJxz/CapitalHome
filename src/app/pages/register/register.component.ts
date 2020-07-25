import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms/forms';
import { UserModel } from '../../models/user.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel: UserModel = new UserModel();
  confirmPassword: string;
  remember = false;

  constructor(private router: Router,private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmitRegister(form: NgForm) {

    if (form.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info'
    });

    Swal.showLoading();

    if (this.userModel.password == this.confirmPassword) {
      
      this.auth.register( this.userModel ).subscribe( response => {

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

    } else {
      Swal.fire({
        title: 'Error al confirmar contraseña',
        icon: 'error'
      });
    }
  }

}
