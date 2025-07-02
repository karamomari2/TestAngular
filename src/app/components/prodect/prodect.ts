import { Component } from '@angular/core';
import { Iprodect } from '../../models/iprodect';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodect',
  imports: [CommonModule,FormsModule],
  templateUrl: './prodect.html',
  styleUrl: './prodect.css'
})
export class Prodect {
  Total:number=0;
 prodect:Iprodect[];
 category:Icategory[];
  categoryId:number=0;

  constructor(){
   this.prodect = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    quinty: 0,
    categoryId: 1,
    prices: 1199.99,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
    
  },
  {
    id: 1,
    name: 'Samsung Galaxy S24',
    quinty: 15,
    categoryId: 1,
    prices: 999.99,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
   
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    quinty: 5,
    categoryId: 1,
    prices: 1499.00,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
  
  },
  {
    id: 4,
    name: 'Dell ',
    quinty: 8,
    categoryId: 2,
    prices: 34.00,
      imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'

  },
  {
    id: 5,
    name: 'Tocepa',
    quinty: 20,
    categoryId: 2,
    prices: 99.00,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
  
  },
  {
    id: 6,
    name: 'Hp',
    quinty: 12,
    categoryId: 2,
    prices: 159.95,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
  },
  {
    id: 7,
    name: 'AirPods Pro (2nd Gen)',
    quinty: 30,
    categoryId: 3,
    prices: 249.00,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
  }  ,{
    id: 8,
    name: 'AirPods',
    quinty: 12,
    categoryId: 3,
    prices: 159.95,
    imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
  }
];

this.category=[
  {name:"iphon",id:1},
  {name:"labtop",id:2},
  {name:"samer",id:3}
]
  }


  buy(prices:number,count:string){
   this.Total += prices*parseInt(count);
  }

trackitem(index: number, item: Iprodect) {
  return item.id; // أو أي مفتاح فريد
}

}
