import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSistemaComponent } from './user-sistema/user-sistema.component';
import { ModulesComponent } from '../modules.component';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'usuario',
    component: ModulesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: UserSistemaComponent, pathMatch: 'full'},
      {
        path: 'user-sistema',
        component: UserSistemaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
