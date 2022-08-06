import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/modules/configuracion/menus/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _service: MenuService) { }

  ngOnInit(): void {
  }



}
