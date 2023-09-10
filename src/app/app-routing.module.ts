import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedComponent } from './med/med.component';
import { MedoperationsComponent } from './medoperations/medoperations.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CategorynameComponent } from './categoryname/categoryname.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OperationsComponent } from './operations/operations.component';
import { DeleteComponent } from './delete/delete.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { StocklevelComponent } from './stocklevel/stocklevel.component';
import { AuthGuard } from './AuthGuard';
// import { TempformComponent } from 'tempform/tempform.component';

 

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'',component:MedComponent},
  {path:'med',component:MedComponent},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent},
  {path:'categoryname',component:CategorynameComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'delete',component:DeleteComponent},
  //{path:'operations',component:OperationsComponent},
  {path:'expiry',component:ExpiryComponent},
  {path:'stocklevel',component:StocklevelComponent},
  {path:'accessdenied',component:AccessdeniedComponent},
  {
    path: 'operations',
    component: OperationsComponent,
    canActivate: [AuthGuard] // Apply the ManagerAuthGuard to protect this route
  },
  {
    path: 'access-denied',
    component: AccessdeniedComponent // Create this component to display an access denied message
  }

 

  // {path:'temp',component:TempformComponent}

];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 

 

 

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

 

// const routes: Routes = [];

 

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }