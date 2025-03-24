import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {ProductListComponent} from "./features/components/product-list/product-list.component";
import {MainLayoutComponent} from "./lay/main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'products', component: MainLayoutComponent,
    children: [
      {path: '', component: ProductListComponent}
    ]
  }
];
