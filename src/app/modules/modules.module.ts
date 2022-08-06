import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UsuariosModule
  ],
  exports: [
    ModulesComponent
  ]
})
export class ModulesModule { }
