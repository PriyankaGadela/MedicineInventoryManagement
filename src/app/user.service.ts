import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddUsers } from './signup/signup.component';

 

export class User{
  constructor(
    public userName:string,
    public Password:string,
    public Role:string
  ){}
}

 

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  private url = "http://localhost:5146"; // Replace with your API endpoint

 

  constructor(private client: HttpClient) {}

 

  AddUser(user: User): Observable<any> {
    const path=`${this.url}/user/add`;
    const head=new HttpHeaders({'content-type':'application/json'});
    var result=this.client.post(path,user,{headers:head,observe:'response'});
    return result;

  }

 

  DoesUserExist(username: string):any {
    const path=`${this.url}/users/username/${username}`;

 

    const head=new HttpHeaders({'content-type':'application/json'});
    var result = this.client.get(path,{headers:head,observe:'response'});
    return result;
  }
}