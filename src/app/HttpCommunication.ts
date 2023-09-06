import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
export class MedicineInventory{
    constructor(public medicineId:number, public medicineName:string, public categoryId:number,public expirydate:Date,public stocklevel:number,public price:number){}
}

export abstract class AbstractHttpCommunication
{
    abstract GetMedicines():Observable<MedicineInventory[]>;
    abstract MedicinesById(medicineId:number):Observable<object>;
    abstract DeleteMedicines(medicineId:number):Observable<object>;
    abstract AddMedicines(md:MedicineInventory):Observable<object>;
    abstract UpdateMedicines(md:MedicineInventory):Observable<object>;
    abstract getTokenAndAccessProtectedResource():Observable<HttpResponse<TokenAndRole>>
    // abstract getMonths():Observable<string[]>;
    
}

@Injectable({providedIn:'root'})
export class HttpCommunication extends AbstractHttpCommunication{
    url='http://localhost:5015';

    constructor(private client:HttpClient){ super();}

    override MedicinesById(medicineId: number): Observable<object> {
        let path=`${this.url}/Id/${medicineId}`;
        var response = this.client.get(path,{observe:'response'});
        return response;
    }

    override AddMedicines(md:MedicineInventory):Observable<object>{
        const path=`${this.url}/add`;
        const head= new HttpHeaders({'content-type':'application/json',observe:'response'});
        var result=this.client.post(path,md,{headers:head,observe:'response'});
        return result;
    }

    // override getMonths():Observable<string[]>{
    //     const url='http://localhost:5015/months';
    //     let token = sessionStorage.getItem('token');
    //     var bearer = `Bearer ${token}`;
    //     const headers={headers:new HttpHeaders({observe:'response',Authorization:bearer})};
    //     var result=this.client.get<string[]>(url,headers);
    //     return result;
    // }

    override UpdateMedicines(md:MedicineInventory):Observable<object>{
        const path= `${this.url}/update`;
        const head = new HttpHeaders({'content-type':'application/json',observe:'response'});
        var result=this.client.put(path,md,{headers:head,observe:'response'});
        return result;
    }

    override GetMedicines(): Observable<MedicineInventory[]>
    {
        let path=`${this.url}/MedicineInventories`;
        const headers={headers:new HttpHeaders({observe:'response'})};
        var result=this.client.get<MedicineInventory[]>(path,headers);
        return result;
    }

    override DeleteMedicines(medicineId: number): Observable<object> {
        let path=`${this.url}/delete/${medicineId}`;
        var response = this.client.delete(path,{observe:'response'});
        return response;
    }

    override getTokenAndAccessProtectedResource():Observable<HttpResponse<TokenAndRole>>{
        const url='http://localhost:5015/login';
        var credentials=new AppUserCredentialsModel('Anand','123');
        const head=new HttpHeaders({'content-type':'application/json'});
        var result=this.client.post<TokenAndRole>(url,credentials,{headers:head,observe:'response'});
        return result;


    }


    
}
export class TokenAndRole{
    constructor(public token:string,public role:string){}
}
export class AppUserCredentialsModel{
    constructor(public userName:string, public password:string){}
}
