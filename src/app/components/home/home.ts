import { Component, OnDestroy, OnInit } from '@angular/core';
import { Oservable } from '../../services/oservable';
import { filter, map, Observable, Subscription, UnsubscriptionError } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { increasecounter } from '../../store/counter/counter/counter.action';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  subscription!: Subscription;
  counter: Observable<number>
  // count!: number
  constructor(private observer: Oservable, private sotre: Store<{ counter: number }>) {
    this.counter = this.sotre.select("counter")
    // this.counter.subscribe((newvalue) => {
    //   this.count = newvalue
    // })
  }


incersecountrval(){
  this.sotre.dispatch(increasecounter())
}







  ngOnInit() {
    this.subscription = this.observer.getNotfition().pipe(
      filter(map => map.includes("one"))
    ).subscribe({
      next: (notfition) => {
        console.log(notfition);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log("notfition completed successfly");
      }

    })
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
