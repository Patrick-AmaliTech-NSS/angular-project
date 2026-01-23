import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IProduct, ProductId } from '../../model';
import { ProductService } from '../../service/fetch-product.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  private readonly productService = inject(ProductService);

  @Input() product!: IProduct;

  @Output() addToCart = new EventEmitter<IProduct>();
  @Output() loadProduct = new EventEmitter<IProduct>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  onProductsLoad() {
    this.loadProduct.emit(this.product);
  }

  handleAddToCart() {
    this.addToCart.emit(this.product);
  }
}

// Questions:
// proper types
// create a json file with products
// create a service to fetch products and display the items
// button -> load products -> display product details
