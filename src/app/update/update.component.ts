import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  MedicineInventory:MedicineInventory;
  statusDetails!:string;
    constructor(private service:AbstractHttpCommunication){
      this.MedicineInventory = new MedicineInventory(0,'',0,new Date(),0,0);
    }
  
  update():void{
    var observableResult=this.service.UpdateMedicines(this.MedicineInventory);
      observableResult.subscribe({
        next:(r:any)=>this.statusDetails=r.statusText,
        error:er=>this.statusDetails=er.message

      });

  }

}
