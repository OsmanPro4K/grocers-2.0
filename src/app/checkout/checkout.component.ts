import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  productsInCheckout = this.cartService.getProductsInCart();

  constructor(private cartService: CartService, private checkoutService: CheckoutService) {}

  onPlaceOrderClicked(fullName: string, email: string, address: string, creditCardNumber: string, expiryDate: string, cvv: string) {
    let newCheckoutInfo = {
      fullName: fullName,
      email: email,
      address: address,
      creditCardNumber: creditCardNumber,
      expiryDate: expiryDate,
      cvv: cvv
    }
    this.checkoutService.addToDataBase(newCheckoutInfo)
  }
}
