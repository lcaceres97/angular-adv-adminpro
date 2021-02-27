import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



//Nota: Configurar las rutas de la aplicación.
const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: '**', component: NopagefoundComponent  },
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
