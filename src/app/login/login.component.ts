import { Component } from '@angular/core';
import { AbstractHttpCommunication } from '../HttpCommunication';
import { AppUserCredentialsModel, TokenAndRole, LoginService} from '../login.service';

//import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})

export class LoginComponent {
 message:string='';
  constructor(private service:LoginService){}
  
  //months:string[]=[];
  getToken(userid:string, pwd:string):void{
    var observableObj=this.service.getTokenAndAccessProtectedResource(userid,pwd);
    observableObj.subscribe({
      next:(result: { body: any; })=>{
        var res = JSON.stringify(result.body);
        var output=JSON.parse(res);
        sessionStorage.setItem('token',output.token);
        sessionStorage.setItem('role',output.role);
        alert(JSON.stringify(result.body));
      },
      error:(err: { message: string; })=>this.message=err.message
    });
  }
}




