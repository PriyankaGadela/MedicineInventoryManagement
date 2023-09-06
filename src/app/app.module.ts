import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractHttpCommunication, HttpCommunication } from './HttpCommunication';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedComponent } from './med/med.component';
import { MedoperationsComponent } from './medoperations/medoperations.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MedComponent,
    MedoperationsComponent,
    ChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{provide:AbstractHttpCommunication, useClass:HttpCommunication}],
  bootstrap: [AppComponent]
})
export class AppModule { }
