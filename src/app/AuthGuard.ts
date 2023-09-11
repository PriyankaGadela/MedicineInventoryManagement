import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

<<<<<<< HEAD
  constructor(private router: Router) { }

  canActivate(): boolean {

=======
 

  constructor(private router: Router) { }

 

  canActivate(): boolean {

 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
    if (sessionStorage.getItem('role') === 'Admin') {
        return true; // Allow access
      } else {
        // If not a manager, redirect to a different page (e.g., access denied)
        this.router.navigate(['/access-denied']);
        return false;
      }

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
        // let token=sessionStorage.getItem('token');
        // let role=sessionStorage.getItem('role');
        // if(token == null){
        //     alert('Please log in..');
        //     this.router.navigate(['operations']);
        //     return false;
        // }
        // else if(token!=null && role != 'admin'){
        //     alert('Not authorized..');
        //     this.router.navigate(['accessdenied']);
        //     return false;
        // }
        // else{
        //     return true;
        // }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
