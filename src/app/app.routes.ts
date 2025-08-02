import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Detalies } from './components/detalies/detalies';
import { Prodect } from './components/prodect/prodect';
import { Order } from './components/order/order';
import { Notfaund } from './components/notfaund/notfaund';
import { Values } from './components/values/values';
import { Vision } from './components/vision/vision';
import { Login } from './components/login/login';
import { authguardGuard } from './guards/authguard-guard';
import { AddProdect } from './components/add-prodect/add-prodect';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'Home'},
    { path: 'Home', component: Home },
    {path: 'aboutus', component: AboutUs, children: [
            {path:'',pathMatch:'full',redirectTo:'vision'},
            { path: 'values', component: Values },
            { path: 'vision', component: Vision }
        ] },
    { path: 'detalis/:id', component: Detalies },
    {path:'register',component:Register},
    { path: 'register/:id', component: Register } ,

    { 
        path: 'prodect', 
        loadComponent:()=>import('./components/prodect/prodect').then((m)=>m.Prodect) ,
        canActivate:[authguardGuard]
    },
    
    { path: 'Order', component: Order },
    { path: 'add-prodect', component: AddProdect,canActivate:[authguardGuard] },
    { path: 'Login', component: Login },
    { path: '**', component: Notfaund }
];



