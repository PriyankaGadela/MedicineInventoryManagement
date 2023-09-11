import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
<<<<<<< HEAD
=======

 
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMed';
  isLoggedIn: boolean=false;

<<<<<<< HEAD
  constructor(private router: Router) {}

=======
 

  constructor(private router: Router) {}

 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  ngOnInit() {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page
        this.isLoggedIn = !this.isLoginPage();
      }
    });
  }

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  // Check if the current route is the login page
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}

