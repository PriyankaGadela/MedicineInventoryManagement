import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MedicineInventory } from '../HttpCommunication';

@Component({
  selector: 'app-oledb',
  templateUrl: './oledb.component.html',
  styleUrls: ['./oledb.component.css']
})
export class OledbComponent {
  public path: string;
  public resultMessage: string;
  inventory:MedicineInventory[]=[];
  constructor(private http: HttpClient) {
    this.path = '';
    this.resultMessage = '';
  }
 ngOnInit(){
   this.readExcel();
 }
  public readExcel(): void {
    let url="http://localhost:5015/ReadExcel";
    this.http.get<MedicineInventory[]>(this.path).subscribe({
     next: (response) => {
        this.inventory=response;  
    },
    error:(err) => {
       // console.error(error);
        this.resultMessage = 'Error reading Excel data.';
      }}
    );
  }

}
