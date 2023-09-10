import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {

    if (sessionStorage.getItem('role') === 'Admin') {
        return true; // Allow access
      } else {
        // If not a manager, redirect to a different page (e.g., access denied)
        this.router.navigate(['/access-denied']);
        return false;
      }

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
}
