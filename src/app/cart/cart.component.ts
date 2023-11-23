import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../product.interface';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  result = 0.0;
  @ViewChild('amountInput', {static: false}) amountInput!: ElementRef;
  productsInCart: Product[] = this.cartService.getProductsInCart();

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.newProducts.subscribe((products: Product[]) => {
      this.productsInCart = products;
    });
    this.cartService.newResult.subscribe((newResult) => {
      this.result = newResult;
    })
    this.updateResult();
  }

  incrementItemAmount(product: Product) {
    product.amount++;
    this.updateResult();
  }
  decrementItemAmount(product: Product) {
    product.amount--;
    if (product.amount < 0) {
      product.amount = 0;
    }
    this.updateResult();
  }

  updateResult() {
    this.cartService.updateResult(this.productsInCart);
  }

  onDeleteButtonClicked(index: number) {
    this.cartService.deleteProduct(index);
  }

  onCheckoutClicked() {
    this.router.navigate(['/checkout'])
  }
}
