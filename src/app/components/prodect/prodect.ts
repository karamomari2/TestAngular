import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iprodect } from '../../models/iprodect';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Highliteielement } from '../../directive/appHighliteielement/highliteielement';
import { ProdectService } from '../../services/prodect-service';

@Component({
  selector: 'app-prodect',
  imports: [CommonModule, FormsModule, Highliteielement, CurrencyPipe],
  templateUrl: './prodect.html',
  styleUrl: './prodect.css'
})
export class Prodect implements OnChanges {
  @Input() selectedCategoryId: number = 0;

  //define event 
  @Output() OnTotlalPriceChange: EventEmitter<number> 
  
  Total: number = 0;
  prodect: Iprodect[];
  FillterProdected: Iprodect[];

  success: boolean = true;
  constructor(private _ProdectService: ProdectService) {

    this.OnTotlalPriceChange = new EventEmitter<number>();

    this.prodect = this._ProdectService.GetAllProdect();

    this.FillterProdected = this._ProdectService.GetAllProdect();



  }


  buy(prices: number, count: string) {
    this.Total += prices * parseInt(count);
    // -fire event
    this.OnTotlalPriceChange.emit(this.Total);
  }

  trackitem(index: number, item: Iprodect) {
    return item.id; // أو أي مفتاح فريد
  }

  ngOnChanges() {
    this.FillterProdected = this._ProdectService.GetProdectsByCatID(this.selectedCategoryId);
  }


}