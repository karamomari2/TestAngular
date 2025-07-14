import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Detalies } from './components/detalies/detalies';
import { Prodect } from './components/prodect/prodect';
import { Order } from './components/order/order';
import { Notfaund } from './components/notfaund/notfaund';

export const routes: Routes = [
    {path:'Home',component:Home},
    {path:'aboutus',component:AboutUs},
    {path:'detalis',component:Detalies},
    {path:'prodect',component:Prodect},
    {path:'Order',component:Order},
    {path:'**',component:Notfaund}
];
