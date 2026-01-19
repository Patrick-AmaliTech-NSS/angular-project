import { Routes } from '@angular/router';
import { Cart } from './component/cart/cart';
import { ProductList } from './component/product-list/product-list';
import { NotFound } from './component/not-found/not-found';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full',
  // },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: '**',
    component: NotFound,
  },
];
