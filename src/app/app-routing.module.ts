import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { Error404Component } from './shared/error404/error404.component';
import { UsuariosRoutingModule } from './modules/usuarios/usuarios-routing.module';

const routes:Routes=[

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:Error404Component }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // PagesRoutingModule,
    AuthRoutingModule,
    UsuariosRoutingModule
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
