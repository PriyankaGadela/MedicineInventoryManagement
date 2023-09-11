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
import { FormsModule } from '@angular/forms';
//import { SearchnameComponent } from './searchname/searchname.component';
import { CategorynameComponent } from './categoryname/categoryname.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
//import { OperationsComponent } from './operations/operations.component';
import { DeleteComponent } from './delete/delete.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { StocklevelComponent } from './stocklevel/stocklevel.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { SortlevelComponent } from './sortlevel/sortlevel.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fas);

=======
import { OperationsComponent } from './operations/operations.component';
import { StocklevelComponent } from './stocklevel/stocklevel.component';
import { ExpiryComponent } from './expiry/expiry.component';
import { DeleteComponent } from './delete/delete.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { SortlevelComponent } from './sortlevel/sortlevel.component';
import { SearchComponent } from './search/search.component';
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3

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
<<<<<<< HEAD
    //OperationsComponent,
    DeleteComponent,
    ExpiryComponent,
    StocklevelComponent,
    AccessdeniedComponent,
    SortlevelComponent,
    AddComponent,
    UpdateComponent
=======
    OperationsComponent,
    StocklevelComponent,
    ExpiryComponent,
    DeleteComponent,
    SortlevelComponent,
    SearchComponent

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [{provide:AbstractHttpCommunication, useClass:HttpCommunication}],
  bootstrap: [AppComponent]
})
export class AppModule { }
