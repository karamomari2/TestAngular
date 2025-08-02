import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit{
  userRegisrtaionForm:FormGroup
id: number | null = null;
  type!:string
  constructor(private _activatedRoute: ActivatedRoute){
    this.userRegisrtaionForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern(('^[a-zA-Z]{3,15}$'))]),
      email:new FormControl(''),
      password:new FormControl(''),
      Address:new FormGroup({
        citt:new FormControl(''),
        street:new FormControl('')
      }),
      phoneNum:new FormArray([new FormControl('')])
    })
  }

ngOnInit() {
  this._activatedRoute.paramMap.subscribe(paramMap => {
    const idParam =  paramMap.get('id');
    this.id = idParam ? Number(idParam) : null;
    this.type = this.id ? 'update' : 'save';
  });
  if(this.type=="update"){
    // this.userRegisrtaionForm.setValue({
    //   name:"karam",
    //   password:"ASAS",
    //   email:"karamomari20010@gmail.com",
    //   Address:{
    //     citt:"irbid",
    //     street:"deryouseet"
    //   }
    // })

     this.userRegisrtaionForm.patchValue({
      name:"karam",
      email:"karamomari20010@gmail.com",
      Address:{
        citt:"irbid",
        street:"deryouseet"
      }
    })
    
  }
}


  //#region 
  get name(){
    return this.userRegisrtaionForm.get('name')
  }

  get phoneNum(){
    return this.userRegisrtaionForm.get('phoneNum') as FormArray
  }
  //#endregion


   
  register(){
    if (this.type === 'save') {
      alert("new user")
  } else {
    alert("update user")
  }
  }

  AddPhone(){
    this.phoneNum.push(new FormControl(''))
  }

  RemovePhone(index:number){
    this.phoneNum.removeAt(index)
  }

}