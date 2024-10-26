import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path:'',component: HomeComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'products/:id', component: ProductsComponent
    },
];
