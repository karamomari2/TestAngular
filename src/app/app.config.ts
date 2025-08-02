import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authinterceptor } from './interceptors/auth-interceptor';
import { provideStore } from '@ngrx/store';
import { counterreuser } from './store/counter/counter/counter.reduser';
import { landreduceser } from './store/counter/lang/lang.reduces';
import { provideEffects } from '@ngrx/effects';
import { LangEffects } from './store/counter/lang/lang.efect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authinterceptor])),
    provideStore({
        counter: counterreuser,
        lang: landreduceser
    }),
    // provideEffects(LangEffects)
]
};
