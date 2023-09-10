import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  MedicineInventories!: MedicineInventory[];
  errors!: string;
  isLoggedIn: string | null = "";
  loginrole: string | null = "";
  constructor(private router: Router,){}
  ngOnInit(){
    this.isLoggedIn = sessionStorage.getItem('token');
    this.loginrole = sessionStorage.getItem("role");
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}
