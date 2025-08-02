import { Component } from '@angular/core';
import { AuthUser } from '../../services/auth-user';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isUserLogged: boolean;
counter!:Observable<number>
count!:number
  constructor(private auth: AuthUser, private sotre: Store<{ counter: number }>) {
    this.isUserLogged = this.auth.GetLoggedUser()
      this.counter = this.sotre.select("counter")
    this.counter.subscribe((newvalue) => {
      this.count = newvalue
    })
  }

  login() {
    this.auth.Login()
    this.isUserLogged = this.auth.GetLoggedUser()

  }

  logout() {
    this.auth.Logout()
    this.isUserLogged = this.auth.GetLoggedUser()

  }
}
