import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Prodect } from './components/prodect/prodect';
import { Iprodect } from './models/iprodect';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer,Prodect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerceStandalone';
 
}
