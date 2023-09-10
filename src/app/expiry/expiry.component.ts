// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-expiry',
//   templateUrl: './expiry.component.html',
//   styleUrls: ['./expiry.component.css']
// })
// export class ExpiryComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-expiry',
  templateUrl: './expiry.component.html',
  styleUrls: ['./expiry.component.css']
})
export class ExpiryComponent implements OnInit {
  expiringMeds: MedicineInventory[] = [];
  errors: string = '';

  constructor(private service: AbstractHttpCommunication) {}

  ngOnInit(): void {
    this.loadExpiringMeds();
  }

  loadExpiringMeds(): void {
    this.service.GetMedicinesExpiringNextMonth().subscribe({
      next: (result: MedicineInventory[]) => {
        this.expiringMeds = result;
      },
      error: (err) => {
        this.errors = 'Error fetching expiring medicines.';
      },
    });
  }
}
