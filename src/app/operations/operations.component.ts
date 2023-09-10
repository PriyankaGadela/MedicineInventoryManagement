import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})

export class OperationsComponent {
  //MedicineInventory!:MedicineInventory[];
  //statusDetails!:string;
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

  update():void{
    var observableResult=this.service.UpdateMedicines(this.MedicineInventory);
      observableResult.subscribe({
        next:(r:any)=>this.statusDetails=r.statusText,
        error:er=>this.statusDetails=er.message

      });
  }

}