import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatBadge} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";
import {ProductService} from "../services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../../models/data";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {ProductCartComponent} from "../product-cart/product-cart.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatBadge,
    MatIcon,
    MatCardActions,
    MatButton,
    ProductCartComponent,
    MatCardContent,
    MatCard,
    MatCardImage,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  private productService = inject(ProductService);
  private snackBar = inject(MatSnackBar);

  products = [];
  cartItems = this.productService;
  cartCount = 0;
  showCart = false;

  constructor() {
    // Calculate cart count whenever cart changes
    // this.productService.cartItems.subscribe(items => {
    //   this.cartCount = items.reduce((count, item) => count + item.quantity, 0);
    // });
  }

  addToCart(product: Product): void {
    // this.productService.addToCart(product);
    this.snackBar.open(`Added ${product.name} to cart`, 'Close', {
      duration: 3000
    });
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }
}
