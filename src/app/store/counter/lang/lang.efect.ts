import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { langaction } from './lang.action';
import { tap } from 'rxjs';

@Injectable()
export class LangEffects {
  constructor(private actions$: Actions) {}

  saveLang$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(langaction),
        tap((action) => {
          localStorage.setItem('lang', action.lang);
        })
      ),
    { dispatch: false }
  );
}
