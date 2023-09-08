import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service:LoginService,private router:Router){}
  
  //months:string[]=[];
  getToken(userid:string, pwd:string):void{
    var observableObj=this.service.getTokenAndAccessProtectedResource(userid,pwd);
    observableObj.subscribe({
      next:(result: { body: any; })=>{
        var res = JSON.stringify(result.body);
        var output=JSON.parse(res);
        sessionStorage.setItem('token',output.token);
        sessionStorage.setItem('role',output.role);
        if(sessionStorage.getItem("role") == "User") {
          this.router.navigate(['/med']);
        }
       // alert(JSON.stringify(result.body));
      },
      error:(err: { message: string; })=>this.message=err.message
    });
  }
}




