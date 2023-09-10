import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  MedicineInventory:MedicineInventory;
  statusDetails!:string;
    constructor(private service:AbstractHttpCommunication){
      this.MedicineInventory = new MedicineInventory(0,'',0,new Date(),0,0);
    }
  

  add():void{
    var observableResult=this.service.AddMedicines(this.MedicineInventory);
      observableResult.subscribe({
        next:(r:any)=>this.statusDetails=r.statusText,
        error:er=>this.statusDetails=er.message

      });
  }

}
