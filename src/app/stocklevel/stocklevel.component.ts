import { Component, OnInit } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
@Component({
  selector: 'app-stocklevel',
  templateUrl: './stocklevel.component.html',
  styleUrls: ['./stocklevel.component.css']
})
export class StocklevelComponent implements OnInit {
<<<<<<< HEAD
  criticalStockLevel: number = 0; // Set your critical stock level here
  medicines: MedicineInventory[] = [];
  errors: string = '';

  constructor(private service: AbstractHttpCommunication) {}

=======
  criticalStockLevel: number = 350; // Set your critical stock level here
  medicines: MedicineInventory[] = [];
  errors: string = '';

 

  constructor(private service: AbstractHttpCommunication) {}

 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  ngOnInit(): void {
    this.loadMedicinesReachingCriticalStock();
  }

<<<<<<< HEAD
=======
 

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
  loadMedicinesReachingCriticalStock(): void {
    this.service.GetMedicinesReachingCriticalStock(this.criticalStockLevel).subscribe({
      next: (result: MedicineInventory[]) => {
        this.medicines = result;
      },
      error: (err) => {
        this.errors = 'Error fetching medicines reaching critical stock level.';
      },
    });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
