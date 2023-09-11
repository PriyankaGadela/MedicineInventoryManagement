// import { Component } from '@angular/core';

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
// @Component({
//   selector: 'app-expiry',
//   templateUrl: './expiry.component.html',
//   styleUrls: ['./expiry.component.css']
// })
// export class ExpiryComponent {

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
// }
import { Component, OnInit } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
@Component({
  selector: 'app-expiry',
  templateUrl: './expiry.component.html',
  styleUrls: ['./expiry.component.css']
})
export class ExpiryComponent implements OnInit {
  expiringMeds: MedicineInventory[] = [];
  errors: string = '';

<<<<<<< HEAD
  constructor(private service: AbstractHttpCommunication) {}

=======
 

  constructor(private service: AbstractHttpCommunication) {}

 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  ngOnInit(): void {
    this.loadExpiringMeds();
  }

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
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
