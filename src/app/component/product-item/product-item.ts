import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IProduct } from '../../model'

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() productName: string = ''
  @Input() price: number = 0
  @Input() product: IProduct[] = []

  @Output() addToCart = new EventEmitter<IProduct[]>()

  onAddToCart () {
    // emit the product name to the parent
    this.addToCart.emit(this.product)
  }
}
// Questions:
// proper types
// create a json file with products 
// create a service to fetch products and display the items
// button -> load products -> display product details