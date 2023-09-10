import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-sortlevel',
  templateUrl: './sortlevel.component.html',
  styleUrls: ['./sortlevel.component.css']
})
export class SortlevelComponent {
  MedicineInventories!:MedicineInventory[];
  errors!:string;
  MedicineInventory:MedicineInventory;
    constructor(private service:AbstractHttpCommunication){
      this.MedicineInventory = new MedicineInventory(0,'',0,new Date(),0,0);
    }
    ngOnInit() {
      this. GetMedicines();
    }
  
    GetMedicines(): void {
      this.service. GetMedicines().subscribe({
        next: (result) => (this.MedicineInventories = result),
        error: (err) => (this.errors = err.message),
      });
    }
  
    sortMedicines(sortBy: string): void {
      this.service.sortMedicines(sortBy).subscribe({
        next: (result) => (this.MedicineInventories = result),
        error: (err) => (this.errors = err.message),
      });
    }

}
