import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductManagerService {
  constructor(private http: HttpClient) {}

  addProduct(product: Product) {
    const url = 'http://localhost:3000/product-manager/api';
    const body = {
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
      amount: product.amount
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(url, body, { headers }).subscribe({
      next: (value) => console.log('Value: ', value),
      error: (error) => console.log('Error: ', error),
      complete: () => console.log('complete'),
    });
  }

  getProducts() {
    return this.http.get("http://localhost:3000/product-manager/api/products")
  }
}
