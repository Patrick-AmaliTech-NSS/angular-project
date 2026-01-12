import { CommonModule } from '@angular/common'
import { Component, inject, Inject } from '@angular/core'
import { ProductItem } from '../product-item/product-item'
import { IProduct } from '../../model'
import { LoggerService } from '../../service/fetch-product.service'

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  providers: [LoggerService],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  private readonly loggerService = inject(LoggerService)
   carts: string[] = []
  handleAddToCart(abc: any) {
    this.loggerService.log(`Adding to cart: ${abc}`)
    this.carts.push(abc)
  }
}
// three ways to inject a service