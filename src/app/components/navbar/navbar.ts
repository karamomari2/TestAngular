import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthUser } from '../../services/auth-user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { langaction } from '../../store/counter/lang/lang.action';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule,AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  isLogged: boolean = false;
  counter!:Observable<number>
lang!:Observable<string>
  constructor(private Auth: AuthUser, private sotre: Store<{ lang:string}>) {

    this.lang = this.sotre.select("lang")

  }
editlang(){
  this.sotre.dispatch(langaction({lang:"AR"}))
}
  ngOnInit() {
    this.Auth.Getobserverbehver().subscribe({
      next: (status) => {
        this.isLogged = status;
      }

    })
  }
}
