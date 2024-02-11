import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
