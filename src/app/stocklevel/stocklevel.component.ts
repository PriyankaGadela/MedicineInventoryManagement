

import { Component, OnInit } from '@angular/core';

import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

 

@Component({

  selector: 'app-stocklevel',

  templateUrl: './stocklevel.component.html',

  styleUrls: ['./stocklevel.component.css']

})

export class StocklevelComponent implements OnInit {

  criticalStockLevel: number = 0; // Set your critical stock level here

  medicines: MedicineInventory[] = [];

  errors: string = '';

 

  constructor(private service: AbstractHttpCommunication) {}

 

  ngOnInit(): void {

    this.loadMedicinesReachingCriticalStock();

  }

 

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

}
