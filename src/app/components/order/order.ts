import { AfterViewInit, Component, ElementRef, EventEmitter, Input, ViewChild, viewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Prodect } from '../prodect/prodect';

@Component({
  selector: 'app-order',
  imports: [CommonModule,FormsModule,Prodect],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements AfterViewInit{

 @ViewChild('userinput') myInput!:ElementRef
 @ViewChild(Prodect) ProdectComonentObj !:Prodect



   category:Icategory[];
  selectedCategoryId: number = 0;
TotalPrices:number=0;
  constructor(){
this.category=[
  {name:"iphon",id:1},
  {name:"labtop",id:2},
  {name:"samer",id:3}
]
  }

  filter() {

  }

  CalculateTotal(tot:number){
this.TotalPrices=tot;
  }

  ngAfterViewInit(){
    console.log(this.ProdectComonentObj.prodect);
    this.myInput.nativeElement.value="karam"
  }
}
