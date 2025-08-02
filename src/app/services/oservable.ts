import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Oservable {
  notfition: string[]

  constructor() {
    this.notfition = [
      "test one 1",
      "test tow 2",
      // "",
      "test three 3",
    ]
  }
  getNotfition(): Observable<string> {
    return new Observable((obsever) => {
      // obsever.next();    في اشي جديد صار  
      // obsever.error() صار مشكله معينه وبدي اخبر الكمبوننت
      // obsever.complete() خلص ما رخ ييجيك نوتفيكيشن جديد  
      let counter = 0;
      let interval = setInterval(() => {
        console.log("x");
        
        if (counter == 3) {
          obsever.complete()
        }
        if (this.notfition[counter] == "") {
          obsever.error()
        }
        obsever.next(this.notfition[counter])
        counter++

      }, 2000)

      return {
        unsubscribe: () => {
          clearInterval(interval)
        },
      }
    })
  }
}
