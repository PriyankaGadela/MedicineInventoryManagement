import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-categoryname',
  templateUrl: './categoryname.component.html',
  styleUrls: ['./categoryname.component.css']
})
// export class CategorynameComponent {
//   MedicineInventories!:MedicineInventory[];
//   errors!:string;
//   button_clicked:boolean=false;
//   categoryName: string="";
//   categoryNames: string[] = []; // Add an array to store category names
//   constructor(private service: AbstractHttpCommunication) {}
  
//   categoryByName(): void {    
//     let observable = this.service.CategoriesByName(this.categoryName);
//     observable.subscribe({
//       next: (result:MedicineInventory[]) => {
//         this.MedicineInventories=result;
//         // Extract and store category names from the result
//         this.categoryNames = result.map((m) => m.categoryName);
//       },
//       error: (err) => (this.errors = err.message),
//     });
//     this.button_clicked=true;
//   }
  

// }





export class CategorynameComponent {
  MedicineInventories!: MedicineInventory[];
  errors!: string;
  button_clicked: boolean = false;
  categoryName: string = "";
  //categoryNames: string[] = []; // Add an array to store category names

  constructor(private service: AbstractHttpCommunication) {}

  categoryByName(): void {
    
    let observable = this.service.CategoriesByName(this.categoryName);
    observable.subscribe({
      next: (result: any) => {
        this.MedicineInventories = result;
        // Extract and store category names from the result
        //this.categoryNames = result.map((inventory) => inventory.categoryName);
      },
      error: (err) => (this.errors = `${err.statusText}  ${err.status}`),
    });
    this.button_clicked = true;
  }
}
