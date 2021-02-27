import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

//Componentes
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class AuthModule { }
