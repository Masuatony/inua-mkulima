import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {ProductListComponent} from "./features/components/product-list/product-list.component";

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'products', component: ProductListComponent
  // }
];
