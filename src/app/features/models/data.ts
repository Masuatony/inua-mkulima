export interface User {
  id: string;
  username: string;
  password: string; // In real app, we wouldn't store plain passwords
  fullName: string;
}

// src/app/shared/models/wallet.model.ts
export interface Wallet {
  userId: string;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  description: string;
  productId?: string;
}

// src/app/shared/models/product.model.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
