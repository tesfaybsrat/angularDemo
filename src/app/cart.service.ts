import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  item: Product[] = [];
  constructor(private http: HttpClient) {}
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  // The addToCart() method appends a product to an array of items.

  addToCart(product: Product) {
    this.item.push(product);
  }

  // The getItems() method collects the items users add to the cart and returns each item with its associated quantity.

  getItems() {
    return this.item;
  }
  // The clearCart() method returns an empty array of items, which empties the cart.
  clearCart() {
    this.item = [];
    return this.item;
  }
}
