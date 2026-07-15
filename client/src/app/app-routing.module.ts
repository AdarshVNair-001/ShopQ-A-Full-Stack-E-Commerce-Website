import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentsComponent } from './Components/login-components/login-components.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'login',component:LoginComponentsComponent},
  {path:'signup',component:SignupComponent},
  {
    path:'',component:LayoutComponent,
    children:
    [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
