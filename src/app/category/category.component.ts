import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})



export class CategoryComponent {
  MedicineInventories!:MedicineInventory[];
  errors!:string;
  button_clicked:boolean=false;
  categoryId: number=0;
  constructor(private service: AbstractHttpCommunication) {}
  categoryById(): void {    
    let observable = this.service.CategoriesById(this.categoryId);
    observable.subscribe({
      next: (result:any) => {
        this.MedicineInventories=result;
        
      },
      error: (err) => (this.errors = err.message),
    });
    this.button_clicked=true;
  }
}
