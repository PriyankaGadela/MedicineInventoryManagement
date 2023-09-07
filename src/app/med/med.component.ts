import { Component } from '@angular/core';
import { AbstractHttpCommunication, MedicineInventory } from '../HttpCommunication';
@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent {
  MedicineInventories!:MedicineInventory[];
  errors!:string;
  MedicineInventory:MedicineInventory;
    constructor(private service:AbstractHttpCommunication){
      this.MedicineInventory = new MedicineInventory(0,'',0,new Date(),0,0);
    }
    ngOnInit(){ 
      this.getMeds();
    }
    getMeds():void{
      let observable=this.service.GetMedicines();
      observable.subscribe({
        next:result=>this.MedicineInventories=result,
        error:err=>this.errors=err.message
      });
    }

    

  
    
    deleteMed(MedicineId:number){
      var confirmation=confirm('Delete Record?');
      if(confirmation==true)
      {
        let observable=this.service.DeleteMedicines(MedicineId);
        observable.subscribe({
          next:(result:any)=>{
            //alert(JSON.stringify(result));
            alert(result.statusText);
            this.getMeds();
          },
          error:err=>this.errors=err.message
        });

      }
    }

}














