//librerias utilizadas

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
//--------------------------------------------------------------------------//
//Declaracion de rutas en el proyecto
//--------------------------------------------------------------------------//
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch :'full'},
  {path: 'home' ,component: LandingPageComponent},
  {path: 'login', component: LoginComponent,/* canActivate:[LandingPageGuard],*/},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductComponent},
  {path: 'user', component : UserComponent},
  //{path: 'carrito', component : CarritoComponent}
];
//---------------------------------------------------------------------------//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
