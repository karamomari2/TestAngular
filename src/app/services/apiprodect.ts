import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iprodect } from '../models/iprodect';
import { environment } from '../../environments/environment.development';
import { Icategory } from '../models/icategory';
import { AuthUser } from './auth-user';

@Injectable({
  providedIn: 'root'
})
export class APIProdect {

  constructor(private httpClient:HttpClient,private auth :AuthUser) { }

GetAllProdect(): Observable<Iprodect[]> {
  return this.httpClient.get<Iprodect[]>(`${environment.baseurl}/prodect`, {
    headers: new HttpHeaders({
       'Authorization': this.auth.GetToken()
    })
  });
}

 
   GetProdectByID(id:number):Observable<Iprodect[]> {
    let search=new HttpParams();
    search.append("id",id)
    search.append("limt",5)
     return this.httpClient.get<Iprodect[]>(`${environment.baseurl}/prodect`,{
      params:search
     });
   }
 
   GetProdectsByCatID(id:number):Observable<Iprodect[]> {
     return this.httpClient.get<Iprodect[]>(`${environment.baseurl}/prodect?categoryId${id}`);
   }
 
   GetAllCategory():Observable<Icategory[]>{
     return this.httpClient.get<Icategory[]>(`${environment.baseurl}/category`);
   }

   AddNewProdect(prodecet:Iprodect):Observable<Icategory>{
     return this.httpClient.post<Icategory>(`${environment.baseurl}/prodect`,prodecet);
   }
   mapProdectId(){
    
   }
}
