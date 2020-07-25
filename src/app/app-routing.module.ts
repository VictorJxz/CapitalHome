import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HOME_ROUTES } from './components/home/home.routes';
import { RegisterComponent } from './pages/register/register.component';

// importar el login
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,children: HOME_ROUTES},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
