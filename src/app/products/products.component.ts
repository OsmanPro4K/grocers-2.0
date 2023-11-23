import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ProductManagerService } from '../product-manager.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productManagerService: ProductManagerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productManagerService.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }

  onAddToCartButtonClicked(product: Product) {
    console.log(product);
    this.cartService.addToCart(product);
  }
}
