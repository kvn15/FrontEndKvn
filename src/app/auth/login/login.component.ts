import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Auth } from '../interface/auth.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formAuth!: FormGroup;

  constructor(private _route:Router, private _fb: FormBuilder, private _service: AuthService,private toastr: ToastrService) {
    if(localStorage.getItem('token')){
      this._route.navigate(['/usuario'])
    }
  }

  ngOnInit(): void {
    this.crearFormularioAuth()
  }

  crearFormularioAuth(){
    this.formAuth = this._fb.group({
      user: [null,[Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  fnAuthentication(){
    const form = this.formAuth.value;
    const data: Auth = {
      sUser: form.user,
      sPassword: form.password
    };

    this._service.post_AuthMethod(data).subscribe( resp => {
      if (typeof(resp) == 'boolean') {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido al Sistema Prueba',
          confirmButtonText: 'Confirmar',
          timer: 3000
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this._route.navigate(['/usuario'])
          }else{
            this._route.navigate(['/usuario'])
          }
        })
      }else{
        this.toastr.error(resp.mensage!);
      }
    })
  }

}
