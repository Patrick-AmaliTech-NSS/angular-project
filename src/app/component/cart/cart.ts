import { Component, inject } from '@angular/core';
import { IProduct } from '../../model';
import { ProductService } from '../../service/fetch-product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  imports: [AsyncPipe]
})
export class Cart {
  productService = inject(ProductService);

  cart$ = this.productService.cart$;

  addToCart(product: IProduct) {
    this.productService.addProductToCart(product);
  }
}
