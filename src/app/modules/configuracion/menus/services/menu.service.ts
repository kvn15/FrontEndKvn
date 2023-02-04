import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WebApiResponse } from 'src/app/shared/interface/WebApi.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url:string = environment.baseUrl+'MenuAuth';

  constructor(private http: HttpClient) { }

  //Metodo para traer los Menus Padre
  async get_MenuPadre(tipoUser:number){

    const params = new HttpParams().set('tipoUser', tipoUser.toString())

    const res = await this.http.get<WebApiResponse<any>>(`${this.url}/get_menuAuth`, {params}).toPromise()

    return res;
  }

}
