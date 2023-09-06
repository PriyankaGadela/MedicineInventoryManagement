import { Component } from '@angular/core';
import { AbstractHttpCommunication } from '../HttpCommunication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private service:AbstractHttpCommunication){}
  message:string='';
  //months:string[]=[];
  getToken():void{
    var observableObj=this.service.getTokenAndAccessProtectedResource();
    observableObj.subscribe({
      next:(result)=>{
        var res = JSON.stringify(result.body);
        var output=JSON.parse(res);
        sessionStorage.setItem('token',output.token);
        sessionStorage.setItem('role',output.role);
        alert(JSON.stringify(result.body));
      },
      error:err=>this.message=err.message
    });
  }
  // getResource():void{
  //   var observableObj=this.service.getMonths();
  //   observableObj.subscribe({
  //     next:result=>this.months=result,
  //     error:err=>this.message=err.statusText
  //   });
  // }
}

