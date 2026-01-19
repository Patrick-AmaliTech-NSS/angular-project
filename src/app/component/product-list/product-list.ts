import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { IProduct, ProductId } from '../../model';
import { ProductService } from '../../service/fetch-product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  providers: [ProductService],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  private readonly productService = inject(ProductService);
  carts: IProduct[] = [];
  products: IProduct[] = [];

  getProducts() {
    let data = this.productService.getProducts();
    // console.log("products:", data)
    this.products.push(...data);
  }

  handleAddToCart(productId: ProductId) {
    const product = this.productService.getProductById(productId);
    if (product) {
      this.carts.push(product);
    }
  }
}
// three ways to inject a service
