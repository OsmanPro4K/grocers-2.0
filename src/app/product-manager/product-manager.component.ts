import { Component } from '@angular/core';
import { Product } from '../product.interface';
import { ProductManagerService } from '../product-manager.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
})
export class ProductManagerComponent {
  constructor(private productManagerService: ProductManagerService) {}
  onSubmit(name: string, price: string, imageSrc: string, amount: string) {
    let newProduct: Product = {
      name: name,
      price: parseInt(price),
      imageSrc: imageSrc,
      amount: parseInt(amount)
    };

    this.productManagerService.addProduct(newProduct);
  }
}
