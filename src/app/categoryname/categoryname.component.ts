import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-categoryname',
  templateUrl: './categoryname.component.html',
  styleUrls: ['./categoryname.component.css']
})
export class CategorynameComponent {
  MedicineInventories!:MedicineInventory[];
  errors!:string;
  button_clicked:boolean=false;
  categoryName: string="";
  constructor(private service: AbstractHttpCommunication) {}
  categoryByName(): void {    
    let observable = this.service.CategoriesByName(this.categoryName);
    observable.subscribe({
      next: (result:any) => {
        this.MedicineInventories=result;
        
      },
      error: (err) => (this.errors = err.message),
    });
    this.button_clicked=true;
  }
  

}
