import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentsComponent } from './Components/login-components/login-components.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'login',component:LoginComponentsComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
