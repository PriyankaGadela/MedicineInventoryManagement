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
goToSignUp() {
  this.router.navigate(['signup']);
}
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
        this.router.navigate(['med']);
        // if(sessionStorage.getItem("role") == "Manager") {
        //   this.router.navigate(['/operations']);
        // }
       // alert(JSON.stringify(result.body));
      },
      error:(err: { message: string; })=>this.message=err.message
    });
      
  }
}





