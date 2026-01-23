import { Injectable } from '@angular/core';
import { ProductsData } from '../model/data';
import { IProduct, ProductId } from '../model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private data: IProduct[] = ProductsData;

  private cartData = new BehaviorSubject<IProduct[]>([]);
  cart$ = this.cartData.asObservable();

  addProductToCart(product: IProduct) {
    this.cartData.next([...this.cartData.value, product]);
  }

  getCartProducts(): IProduct[] {
    return this.cartData.value;
  }

  getProducts() {
    return this.data;
  }

  getProductById(id: ProductId): IProduct | undefined {
    return this.data.find((product) => product.id === id);
  }
}
