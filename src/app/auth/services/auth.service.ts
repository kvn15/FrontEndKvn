import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth, AuthResponse, Usuario } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = environment.baseUrl+'Auth';
  private _usuario: Usuario = {
    state : false
  };

  constructor(private _http: HttpClient,private _route:Router) { }

  //Metodo para Loguear datos

  post_AuthMethod(auth:Auth):Observable<AuthResponse>{
    return this._http.post<AuthResponse>(`${this.url}/login`,auth)
              .pipe(
                tap(resp => {
                  if (resp.state) {
                    localStorage.setItem('token', resp.data?.token!)
                    this._usuario = {
                      sUser: resp.data?.sUser,
                      state : resp.state
                    }
                  }
                }),
                map( validar => validar.state ),
                catchError( err => of(err.error) )
              );
  }

  //mantener usuario
  get usuario(){
    return {...this._usuario};
  }

  //Cerrar Sesion
  logut(){
    localStorage.clear()
    this._route.navigate(['/login'])
  }


}
