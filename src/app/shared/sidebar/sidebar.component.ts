import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/modules/configuracion/menus/services/menu.service';
import { environment } from 'src/environments/environment';

interface MenuPadre {
  nIdMenu:    number;
  sNomMenu:   string;
  sAbreviado: string;
  sPath:      string;
  nMenuPadre: number;
  totalHijos: number;
  lHijoMenu: MenuHijo[];
  bActivo: boolean;
}

interface MenuHijo{
  nIdMenu:    number;
  sNomMenu:   string;
  sAbreviado: string;
  sPath:      string;
  nMenuPadre: number;
  totalHijos: number;
  bActivo: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public _tipUsu: number = 0;
  public lMenuPadre: MenuPadre[] = [];
  public ruta: string = '';

  constructor(private _service: MenuService, private route: Router, private router: ActivatedRoute) {
    const user = localStorage.getItem('token') ?? '';
    this._tipUsu = JSON.parse(window.atob(user.split('.')[1])).role;
    const sRuta: string = this.route.url;
    this.ruta = '/'+sRuta.split('/')[1];
  }

  async ngOnInit(): Promise<any> {
    await this.fnObtenerMenuPadres();
  }

  //Obtenemos los menus padres
  public async fnObtenerMenuPadres() {

    const {success, response, errors} = await this._service.get_MenuPadre(this._tipUsu);

    if(success){
      this.lMenuPadre = response.data;
      console.log(this.lMenuPadre)
    }

  }

  //Metodo para ir a la ruta
  public async fnIrRutaNavegacion(valor: MenuHijo | MenuPadre) {

    //Funcion para activar botones hijos del menu
    if(valor.nMenuPadre == 0) {
      this.lMenuPadre.map( lmp => {
        if(lmp.nIdMenu === valor.nIdMenu){
          lmp.bActivo = true
        }else {
          lmp.bActivo = false;
        }
      })
    }else {
      this.lMenuPadre.map( lmp => {
        lmp.lHijoMenu.map( lh => {
          if(lh.nIdMenu === valor.nIdMenu){
            lh.bActivo = true;
          }else {
            lh.bActivo = false;
          }
        });
      });
    }


    this.route.navigate([`${valor.sPath}`]);

  }

}
