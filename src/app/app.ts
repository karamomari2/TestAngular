import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Prodect } from './components/prodect/prodect';
import { Iprodect } from './models/iprodect';
import { Order } from './components/order/order';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer,RouterOutlet,AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerceStandalone';
  lang!:Observable<string>
  dir:string="Itr"
 constructor(private store:Store<{lang:string}>)
 {
  this.lang=this.store.select("lang")
  this.lang.subscribe((v)=>{
    this.dir=(v=="en")?'Itr':'rtl'
  })
 }

}
