import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService:AuthService, private _route:Router) {}

  canActivate(): Observable<boolean> | boolean {
    if(!localStorage.getItem('token')){
      this._route.navigate(['/login'])
      return false;
    }else{
      return true;
    }
  }

}
