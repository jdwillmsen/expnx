import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductByCategory(category: string) {
    return this.httpClient.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
}
