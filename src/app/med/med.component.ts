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
  //selectedDropdownItem: string = "";
    constructor(private service:AbstractHttpCommunication){
      this.MedicineInventory = new MedicineInventory(0,'',0,new Date(),0,0);
    }
    // ngOnInit() {
    //   this. GetMedicines();
    // }
  
    // GetMedicines(): void {
    //   this.service. GetMedicines().subscribe({
    //     next: (result) => (this.MedicineInventories = result),
    //     error: (err) => (this.errors = err.message),
    //   });
    // }
  
    // sortMedicines(sortBy: string): void {
    //   this.service.sortMedicines(sortBy).subscribe({
    //     next: (result) => (this.MedicineInventories = result),
    //     error: (err) => (this.errors = err.message),
    //   });
    // }
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
    // selectDropdownItem(item: string): void {
    //   this.selectedDropdownItem = item;
    // }

    // search(): void {
    //   // Perform the search based on this.selectedDropdownItem
    //   // You can use the selectedDropdownItem value to filter your data or trigger the desired search functionality.
    //   // For example, you can call a service method to perform the search here.
    //   console.log("Searching for:", this.selectedDropdownItem);
    //   // Call your service method or implement your search logic here.
    // }
    


  
    
    // deleteMed(MedicineId:number){
    //   var confirmation=confirm('Delete Record?');
    //   if(confirmation==true)
    //   {
    //     let observable=this.service.DeleteMedicines(MedicineId);
    //     observable.subscribe({
    //       next:(result:any)=>{
    //         //alert(JSON.stringify(result));
    //         alert(result.statusText);
    //         this.getMeds();
    //       },
    //       error:err=>this.errors=err.message
    //     });

    //   }
    // }

}















