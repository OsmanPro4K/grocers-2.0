import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any = []

  constructor(private http: HttpClient, private orderService: OrderService) {}
  ngOnInit(): void {
      this.orderService.getOrders().subscribe((orders) => {
        this.orders = orders
        console.log(this.orders);
      })
  }
}
