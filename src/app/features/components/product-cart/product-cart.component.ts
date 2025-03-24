import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {CartItem} from "../../models/data";
import {ProductService} from "../services/product.service";
import {WalletService} from "../services/wallet.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatIconButton
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent  implements OnInit{
  private productService = inject(ProductService);
  private walletService = inject(WalletService);
  private snackBar = inject(MatSnackBar);



  cartItems = []
  totalAmount = this.productService;
  walletBalance: any
  // walletBalance = this.walletService.currentWallet.map(wallet => wallet?.balance || 0);
  isProcessing = false;

  ngOnInit() {
    this.fetchData();
  }

  updateQuantity(item: CartItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    const quantity = parseInt(input.value, 10);

    if (quantity >= 1) {
      // this.productService.updateQuantity(item.product.id, quantity);
    } else {
      // Reset to 1 if invalid input
      input.value = '1';
      // this.productService.updateQuantity(item.product.id, 1);
    }
  }

  fetchData = () => {
    this.productService.fetchProducts().subscribe({
      next: (products: any) => {
        console.log(products)
        this.cartItems = products
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    })

}

  removeItem(productId: string): void {
    // this.productService.removeFromCart(productId);
    this.snackBar.open('Item removed from cart', 'Close', { duration: 3000 });
  }

  checkout(): void {
    this.isProcessing = true;
    // const total = this.totalAmount();

    // if (this.walletBalance() < total) {
    //   this.snackBar.open('Insufficient funds in your wallet', 'Close', {
    //     duration: 3000,
    //     panelClass: ['error-snackbar']
    //   });
    //   this.isProcessing = false;
    //   return;
    // }

    // const success = this.walletService.deductAmount(
    //   total,
    //   `Purchase of ${this.cartItems().length} products`
    // );

    // if (success) {
    //   this.snackBar.open('Purchase successful! Your wallet has been debited.', 'Close', {
    //     duration: 5000,
    //     panelClass: ['success-snackbar']
    //   });
    //   this.productService.clearCart();
    // } else {
    //   this.snackBar.open(
    //     this.walletService.transactionError() || 'Transaction failed',
    //     'Close',
    //     { duration: 3000, panelClass: ['error-snackbar'] }
    //   );
    // }

    this.isProcessing = false;
  }
}
