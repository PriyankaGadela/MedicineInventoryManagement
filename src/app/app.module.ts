import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractHttpCommunication, HttpCommunication } from './HttpCommunication';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedComponent } from './med/med.component';
import { MedoperationsComponent } from './medoperations/medoperations.component';
import { HttpClientModule } from '@angular/common/http';
//import { ChartComponent } from './chart/chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { SearchnameComponent } from './searchname/searchname.component';
import { CategorynameComponent } from './categoryname/categoryname.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OperationsComponent } from './operations/operations.component';
import { StocklevelComponent } from './stocklevel/stocklevel.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { DeleteComponent } from './delete/delete.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { SortlevelComponent } from './sortlevel/sortlevel.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MedComponent,
    MedoperationsComponent,
   // ChartComponent,
    LoginComponent,
    CategoryComponent,
    //SearchnameComponent,
    CategorynameComponent,
    NavbarComponent,
    OperationsComponent,
    StocklevelComponent,
    ExpiryComponent,
    DeleteComponent,
    SortlevelComponent,
    SearchComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [{provide:AbstractHttpCommunication, useClass:HttpCommunication}],
  bootstrap: [AppComponent]
})
export class AppModule { }
