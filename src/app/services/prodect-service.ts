import { Injectable } from '@angular/core';
import { Iprodect } from '../models/iprodect';

@Injectable({
  providedIn: 'root'
})
export class ProdectService {
  prodects: Iprodect[];

  constructor() {

    this.prodects = [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        quinty: 1,
        categoryId: 1,
        prices: 800.99,
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcFbX-CC1ugTZaxsSyZdHY8LkIHiQXJp_2g&s'

      },
      {
        id: 2,
        name: 'Samsung Galaxy S24',
        quinty: 2,
        categoryId: 1,
        prices: 199.99,
        imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'

      },
      {
        id: 3,
        name: 'MacBook Air M3',
        quinty: 5,
        categoryId: 1,
        prices: 250.00,
        imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'

      },
      {
        id: 4,
        name: 'Dell ',
        quinty: 8,
        categoryId: 2,
        prices: 340.00,
        imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'

      },
      {
        id: 5,
        name: 'Tocepa',
        quinty: 20,
        categoryId: 2,
        prices: 200.00,
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
        prices: 15.00,
        imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
      }, {
        id: 8,
        name: 'AirPods',
        quinty: 12,
        categoryId: 3,
        prices: 16.95,
        imageurl: 'https://murena.com/wp-content/uploads/2025/01/Murena_Pixel_8_Black-300x300.png'
      }
    ];
  }

  GetAllProdect(): Iprodect[] {
    return this.prodects;
  }

  GetProdectByID(id: number): Iprodect | null {
    let fundedProdect = this.prodects.find((fin) => fin.id == id);
    return fundedProdect ? fundedProdect : null
  }

  GetProdectsByCatID(CatID: number): Iprodect[] {
    if (CatID == 0) {
      return this.prodects;
    }
    else {
      return this.prodects.filter((fin) => fin.categoryId == CatID);
    }
  }

}
