import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iprodect } from '../../models/iprodect';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Highliteielement } from '../../directive/appHighliteielement/highliteielement';
import { ProdectService } from '../../services/prodect-service';
import { Router, RouterLink } from '@angular/router';
import { APIProdect } from '../../services/apiprodect';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prodect',
  imports: [CommonModule, FormsModule, Highliteielement, CurrencyPipe,RouterLink],
  templateUrl: './prodect.html',
  styleUrl: './prodect.css'
})
export class Prodect implements OnChanges, OnInit {
  @Input() selectedCategoryId: number = 0;

  //define event 
  @Output() OnTotlalPriceChange: EventEmitter<number>

  Total: number = 0;
  prodect!: Iprodect[];
  FillterProdected!: Iprodect[];

  success: boolean = true;
  constructor(private _ProdectService: ProdectService,
    private router: Router, private apiprodect: APIProdect) {

    this.OnTotlalPriceChange = new EventEmitter<number>();

    // this.prodect = this._ProdectService.GetAllProdect();

    // this.FillterProdected = this._ProdectService.GetAllProdect();
  }

  ngOnInit() {
    this.apiprodect.GetAllProdect().subscribe({
      next: (res) => {
        this.prodect = res
        this.FillterProdected=res
      },
      error(err) {
      },
      complete: () => {
      }
    })
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
    this.apiprodect.GetProdectsByCatID(this.selectedCategoryId).subscribe({
      next: (value) => {
        this.FillterProdected = value;
      },
      error: (err) => {
      },
      complete: () => {
      }
    });
  }

  ViewDetalis(id: number) {
    this.router.navigateByUrl(`detalis/${id}`);
  }
}