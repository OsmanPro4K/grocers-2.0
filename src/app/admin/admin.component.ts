import { Component, OnInit } from '@angular/core';
import { ProductManagerService } from '../product-manager.service';
import { Product } from '../product.interface';
import { AdminService } from '../admin.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  orders: any = []

  constructor(
    private productManagerService: ProductManagerService,
    private adminService: AdminService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.productManagerService.getProducts().subscribe((products: any) => {
      this.products = products;
    });
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders
    })
  }
}
