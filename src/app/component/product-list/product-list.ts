import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { IProduct } from '../../model';
import { ProductService } from '../../service/fetch-product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  private readonly productService = inject(ProductService);
  products: IProduct[] = [];

  getProducts() {
    let data = this.productService.getProducts();
    this.products.push(...data);
  }

  handleAddToCart(product: IProduct) {
    this.productService.addProductToCart(product);
  }

  ngOnInit() {
    this.getProducts();
  }
}
