import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isProductsClicked = true;
  constructor() { }

  getIsProductsClicked() {
    return this.isProductsClicked
  }

  setIsProductsClicked(condition: any) {
    if (condition) {
      return this.isProductsClicked
    } else {
      return !this.isProductsClicked
    }
  }
}
