import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const api1 = 'https://dennis027.herokuapp.com/'

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PartnerInfoService {
 private api= 'https://dennis027.herokuapp.com/partnerInfo/'
  constructor(private router:Router,private http:HttpClient,private httpClient:HttpClient) { }
 
  getData():Observable<any[]>{
    return this.httpClient.get<any[]>(this.api)
  }
  post(user:string,subject:string,message:string,date:Date):Observable<any>{
    return this.http.post(api1+'partnerInfo/',{
      user,subject,message,date
    },httpOptions)
  }
}
