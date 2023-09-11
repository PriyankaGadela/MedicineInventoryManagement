import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
export class MedicineInventory{
    constructor(public medicineId:number, public medicineName:string, public categoryId:number,public expirydate:Date,public stocklevel:number,public price:number){}
}

export abstract class AbstractHttpCommunication
{

    abstract GetMedicines():Observable<MedicineInventory[]>;
    abstract sortMedicines(sortBy: string):Observable<MedicineInventory[]>;
    abstract MedicinesById(medicineId:number):Observable<object>;
    abstract CategoriesById(categoryId:number):Observable<object>;
    abstract CategoriesByName(categoryName:string):Observable<object>;
    //abstract getAllCategoryNames(md:MedicineInventory):Observable<object>;
    abstract DeleteMedicines(medicineId:number):Observable<object>;
    abstract AddMedicines(md:MedicineInventory):Observable<object>;
    abstract UpdateMedicines(md:MedicineInventory):Observable<object>;
    abstract GetMedicinesExpiringNextMonth(): Observable<MedicineInventory[]>;
    abstract GetMedicinesReachingCriticalStock(criticalStockLevel: number): Observable<MedicineInventory[]>;
<<<<<<< HEAD
    abstract sortMedicines(sortBy: string): Observable<MedicineInventory[]>;

=======

 

 
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3

   // abstract getTokenAndAccessProtectedResource():Observable<HttpResponse<TokenAndRole>>
    // abstract getMonths():Observable<string[]>;

}


@Injectable({providedIn:'root'})
export class HttpCommunication extends AbstractHttpCommunication{
    url='http://localhost:5146';
    constructor(private client:HttpClient){ super();}
    override MedicinesById(medicineId: number): Observable<object> {
        let path=`${this.url}/Id/${medicineId}`;
        var response = this.client.get(path,{observe:'response'});
        return response;
    }

    override CategoriesById(categoryId: number): Observable<MedicineInventory[]> {
        let path=`${this.url}/MedicineInventories/ByCategory/${categoryId}`;
        const headers = { headers: new HttpHeaders({observe: 'response' }) };
        var result = this.client.get<MedicineInventory[]>(path, headers); // make GET http request
        return result;

    }
    override CategoriesByName(categoryName: string): Observable<MedicineInventory[]> {
        const path = `${this.url}/search?searchTerm=${categoryName}`;
        const headers = { headers: new HttpHeaders({ observe: 'response' }) };

        return this.client.get<MedicineInventory[]>(path, headers);
    }
    // override getAllCategoryNames(): Observable<string[]> {
    //     const url = `${this.url}/categories/names`; // Adjust the URL to match your API endpoint for category names
    //     return this.client.get<string[]>(url);
    //   }
<<<<<<< HEAD
=======

 
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3

    override AddMedicines(md:MedicineInventory):Observable<object>{
        const path=`${this.url}/add`;
        const head= new HttpHeaders({'content-type':'application/json',observe:'response'});
        var result=this.client.post(path,md,{headers:head,observe:'response'});
        //alert('hello');
        return result;
    }


    override UpdateMedicines(md:MedicineInventory):Observable<object>{
        const path= `${this.url}/update`;
        const head = new HttpHeaders({'content-type':'application/json',observe:'response'});
        var result=this.client.put(path,md,{headers:head,observe:'response'});
<<<<<<< HEAD
        
=======

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
        return result;
    }

    override GetMedicines(): Observable<MedicineInventory[]>
    {
        let path=`${this.url}/MedicineInventories`;
        const headers={headers:new HttpHeaders({observe:'response'})};
        var result=this.client.get<MedicineInventory[]>(path,headers);
<<<<<<< HEAD
        
=======

        return result;
    }

    override sortMedicines(sortBy:String): Observable<MedicineInventory[]>
    {
        let path=`${this.url}/filter?sortBy=${sortBy}`;
        const headers={headers:new HttpHeaders({observe:'response'})};
        var result=this.client.get<MedicineInventory[]>(path,headers);

>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3
        return result;
    }

    override DeleteMedicines(medicineId: number): Observable<object> {
        let path=`${this.url}/delete/${medicineId}`;
        var response = this.client.delete(path,{observe:'response'});
        return response;
    }
<<<<<<< HEAD
    override GetMedicinesExpiringNextMonth(): Observable<MedicineInventory[]> {
        const path = `${this.url}/MedicinesExpiringNextMonth`;
        const headers = { headers: new HttpHeaders({ observe: 'response' }) };
      
        return this.client.get<MedicineInventory[]>(path, headers);
    }
    override GetMedicinesReachingCriticalStock(criticalStockLevel: number): Observable<MedicineInventory[]> {
        const path = `${this.url}/MedicineInventories/CriticalStock/${criticalStockLevel}`;
        const headers = { headers: new HttpHeaders({ observe: 'response' }) };
      
        return this.client.get<MedicineInventory[]>(path, headers);
    }
    override sortMedicines(sortBy: string): Observable<MedicineInventory[]> {
        const path = `${this.url}/MedicineInventories/Sorting?sortBy=${sortBy}`;
        const headers = { headers: new HttpHeaders({ observe: "response" }) };
    
        return this.client.get<MedicineInventory[]>(path, headers);
    }
      
      
=======
    GetMedicinesExpiringNextMonth(): Observable<MedicineInventory[]> {
        const path = `${this.url}/MedicinesExpiringNextMonth`;
        const headers = { headers: new HttpHeaders({ observe: 'response' }) };

        return this.client.get<MedicineInventory[]>(path, headers);
    }
    GetMedicinesReachingCriticalStock(criticalStockLevel: number): Observable<MedicineInventory[]> {
        const path = `${this.url}/MedicineInventories/CriticalStock/${criticalStockLevel}`;
        const headers = { headers: new HttpHeaders({ observe: 'response' }) };

        return this.client.get<MedicineInventory[]>(path, headers);
      }
>>>>>>> 21dffe05151f39f4f6dca31ffba331ea514589f3

    // override getTokenAndAccessProtectedResource():Observable<HttpResponse<TokenAndRole>>{
    //     const url='http://localhost:5015/login';
    //     var credentials=new AppUserCredentialsModel('Anand','123');
    //     const head=new HttpHeaders({'content-type':'application/json'});
    //     var result=this.client.post<TokenAndRole>(url,credentials,{headers:head,observe:'response'});
    //     return result;


    // }
    
}
export class TokenAndRole{
    constructor(public token:string,public role:string){}
}
export class AppUserCredentialsModel{
    constructor(public userName:string, public password:string){}
}

