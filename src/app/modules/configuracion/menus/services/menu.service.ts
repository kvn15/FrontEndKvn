import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url:string = environment.baseUrl+'MenuAuth';

  constructor(private http: HttpClient) { }

  //Metodo para traer los Menus Padre
  get_MenuPadre(tipoUser:number):Observable<any>{

    const params = new HttpParams().set('tipoUser', tipoUser.toString())

    return this.http.get<any>(`${this.url}/get_menuAuth`, {params})

  }

  //Metodo para traer los Menus Hijos
  get_MenuHijos(tipoUser:number, padre:number):Observable<any>{

    const params = new HttpParams().set('tipoUser', tipoUser.toString()).set('padre', padre.toString())

    return this.http.get<any>(`${this.url}/get_menuAuthHijos`, {params})

  }

}
