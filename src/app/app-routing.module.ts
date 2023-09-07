import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedComponent } from './med/med.component';
import { MedoperationsComponent } from './medoperations/medoperations.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CategorynameComponent } from './categoryname/categoryname.component';
// import { ReactiveformComponent } from './reactiveform/reactiveform.component';
// import { TempformComponent } from 'tempform/tempform.component';

const routes: Routes = [
  {path:'',component:MedComponent},
  {path:'medoperations',component:MedoperationsComponent},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent},
  {path:'categoryname',component:CategorynameComponent}
  // {path:'react',component:ReactiveformComponent},
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
