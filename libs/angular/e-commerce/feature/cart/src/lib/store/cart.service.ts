import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart.actions';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  getCart() {
    return this.httpClient.get<Cart[]>(`https://fakestoreapi.com/carts`);
  }
}
