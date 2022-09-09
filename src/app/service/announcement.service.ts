import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const api1  = 'https://dennis027.herokuapp.com/'
const httpOptions = {
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private api = 'https://dennis027.herokuapp.com/announcement/'

  constructor( private router:Router,private http:HttpClient,private httpClient:HttpClient) {}
  getData():Observable<any[]>{
    return this.httpClient.get<any[]>(this.api)
  }
  post(user:string,subject:string,message:string,location:string,date:Date):Observable<any>{
    return this.httpClient.post(api1+'announcement/',{
      user,subject,message,location,date
    },httpOptions)
  }
  update(user:string,subject:string,message:string,location:string,date:Date):Observable<any>{
    return this.httpClient.put(api1+'announcement/',{
      user,subject,message,location,date
    },httpOptions)
  }

}
