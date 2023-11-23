import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient, private cartService: CartService) {}

  addToDataBase(checkoutInfo: any) {
    const url = 'http://localhost:3000/checkout/api';
    const body = {
      fullName: checkoutInfo.fullName,
      email: checkoutInfo.email,
      address: checkoutInfo.address,
      creditCardNumber: checkoutInfo.creditCardNumber,
      expiryDate: checkoutInfo.expiryDate,
      cvv: checkoutInfo.cvv,
      products: this.cartService.getProductsInCart()
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(url, body, { headers }).subscribe({
      next: (value) => console.log('Value: ', value),
      error: (error) => console.log('Error: ', error),
      complete: () => {
        console.log('Post to Backend successful');
      },
    });
  }
}
