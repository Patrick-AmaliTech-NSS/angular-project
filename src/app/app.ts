import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
  router = inject(Router);

  handleCartNavigation() {
    this.router.navigateByUrl('cart');
  }

  handleProductListNavigation() {
    this.router.navigateByUrl('products');
  }
}
