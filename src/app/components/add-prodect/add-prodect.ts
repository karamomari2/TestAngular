import { Component, OnInit } from '@angular/core';
import { APIProdect } from '../../services/apiprodect';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iprodect } from '../../models/iprodect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prodect',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-prodect.html',
  styleUrl: './add-prodect.css'
})
export class AddProdect implements OnInit {
  categorys:Icategory[] =[]
  prodect:Iprodect ={} as Iprodect
   constructor(private category:APIProdect,private router:Router){

  }
  ngOnInit() {
    this.category.GetAllCategory().subscribe({
      next: (res) => {
        this.categorys = res
        console.log(res);
        
      }
    })
  }

AddNewProdect(){
  this.category.AddNewProdect(this.prodect).subscribe({
    next:()=>{
      alert("saved success")
      this.router.navigateByUrl('/prodect')
    },
    error:(err)=>{
     alert(err)
    }
  })
}

}
