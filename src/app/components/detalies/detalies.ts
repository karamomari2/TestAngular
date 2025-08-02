import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Values } from '../values/values';
import { Vision } from '../vision/vision';
import { ProdectService } from '../../services/prodect-service';
import { Iprodect } from '../../models/iprodect';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APIProdect } from '../../services/apiprodect';

@Component({
  selector: 'app-detalies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalies.html',
  styleUrl: './detalies.css'
})
export class Detalies implements OnInit {
  id: number = 0;
  prodecet: Iprodect | null = null;
  idArryas: number[];
  constructor(private _activatedRoute: ActivatedRoute,
    private pro: ProdectService, private _location: Location
    , private router: Router,private apiservieses:APIProdect) {
    this.idArryas = this.pro.mapProdectId();
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get("id"))
      
      this.apiservieses.GetProdectByID(this.id).subscribe({
        next: (res) => {
          console.log(res);
          
           this.prodecet = res[0]; 
        },
        error: (err) => {
          console.log(err);

        }
      })
    })

  }

  GoBack() {
    this._location.back()
  }


Next() {
  let currentindexid = this.idArryas.findIndex((id: number) => id == this.id);
  if (currentindexid < this.idArryas.length - 1) {
    let nextId = this.idArryas[currentindexid + 1];
    this.router.navigateByUrl(`/detalis/${nextId}`);
  }
  else{
    this.router.navigateByUrl(`/detalis/1`);

  }
}

pre() {
  let currentindexid = this.idArryas.findIndex((id: number) => id == this.id);
  if (currentindexid > 0) {
    let prevId = this.idArryas[currentindexid - 1];
    this.router.navigateByUrl(`/detalis/${prevId}`);
  }
}

}
