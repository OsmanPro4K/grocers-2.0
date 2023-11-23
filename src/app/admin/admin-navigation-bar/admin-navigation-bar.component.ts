import { Component, EventEmitter, Output } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-navigation-bar',
  templateUrl: './admin-navigation-bar.component.html',
  styleUrls: ['./admin-navigation-bar.component.css'],
})
export class AdminNavigationBarComponent {

  constructor(private adminService: AdminService) {}

  onProductsClicked() {
    this.adminService.setIsProductsClicked(true)
  }

  onOrdersClicked() {
    this.adminService.setIsProductsClicked(false)
  }
}
