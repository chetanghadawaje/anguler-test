import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: "",
        component: ProductsComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"**",
        component:ProductsComponent
    }
];
