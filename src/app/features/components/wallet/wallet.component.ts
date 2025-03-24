// import {Component, inject} from '@angular/core';
// import {WalletService} from "../services/wallet.service";
// import {AuthService} from "../../../auth/service/auth.service";
// import {MatSnackBar} from "@angular/material/snack-bar";
//
// @Component({
//   selector: 'app-wallet',
//   standalone: true,
//   imports: [],
//   templateUrl: './wallet.component.html',
//   styleUrl: './wallet.component.scss'
// })
// export class WalletComponent {
//   private walletService = inject(WalletService);
//   private authService = inject(AuthService);
//   private snackBar = inject(MatSnackBar);
//
//   wallet = this.walletService.currentWallet;
//   user = this.authService.currentUser;
//   topUpAmount = 0;
//
//   addFunds(): void {
//     if (this.topUpAmount <= 0) {
//       this.snackBar.open('Please enter a valid amount', 'Close', { duration: 3000 });
//       return;
//     }
//
//     this.walletService.addFunds(this.topUpAmount, 'Manual top-up');
//     this.snackBar.open(`Added KSh ${this.topUpAmount.toLocaleString()} to your wallet`, 'Close', {
//       duration: 3000
//     });
//
//     // Reset input
//     this.topUpAmount = 0;
//   }
// }
