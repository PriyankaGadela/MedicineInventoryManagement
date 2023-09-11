import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
<<<<<<< HEAD
  isLoggedIn: boolean=false;//string | null = "";
=======
  MedicineInventories!: MedicineInventory[];
  errors!: string;
  isLoggedIn: string | null = "";
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  loginrole: string | null = "";
  constructor(private router: Router,){}
  ngOnInit(){
    this.isLoggedIn = sessionStorage.getItem('token')==null? false:true;
    this.loginrole = sessionStorage.getItem("role");
  }
  ngAfterViewChanged(){}
  logout(){
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}
