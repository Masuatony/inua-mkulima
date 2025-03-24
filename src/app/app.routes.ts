import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {MainLayoutComponent} from "./lay/main-layout/main-layout.component";
import {ProductComponent} from "./features/components/product/product.component";

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainLayoutComponent,
    children: [
      {path: 'products', component: ProductComponent}
    ]
  }
];
