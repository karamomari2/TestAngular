import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUser {

isUserLogin:boolean=false

private observerbehver:BehaviorSubject<boolean>

  constructor() {
    this.observerbehver=new BehaviorSubject<boolean>(false)
   }

  Login(){
    localStorage.setItem('token','sdsdsd215sdfsdff0');
    this.observerbehver.next(true)
  }

  Logout(){
    localStorage.removeItem('token')
    this.observerbehver.next(false)
  }
  GetLoggedUser(){
   return localStorage.getItem('token')?true:false
  }
GetToken(): string {
  return localStorage.getItem('token') ?? '';
}
  Getobserverbehver():BehaviorSubject<boolean>{
    return this.observerbehver
  }
}
