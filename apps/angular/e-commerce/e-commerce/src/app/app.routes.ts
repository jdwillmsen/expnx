/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
import { cartFeature, loadCart } from '@expnx/angular/e-commerce/feature/cart';
import {
  loadProducts,
  productFeature,
  loadProductsByCategory,
} from '@expnx/angular/e-commerce/feature/product';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@expnx/angular/e-commerce/feature/user').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('@expnx/angular/e-commerce/feature/product').then(
        (m) => m.ProductComponent,
      ),
    providers: [
      provideState(productFeature),
      provideEffects({ loadProducts, loadProductsByCategory }),
    ],
  },
  {
    path: 'product/:categoryName',
    loadComponent: () =>
      import('@expnx/angular/e-commerce/feature/product').then(
        (m) => m.ProductComponent,
      ),
    providers: [
      provideState(productFeature),
      provideEffects({ loadProducts, loadProductsByCategory }),
    ],
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@expnx/angular/e-commerce/feature/cart').then(
        (m) => m.CartComponent,
      ),
    providers: [provideState(cartFeature), provideEffects({ loadCart })],
  },
];
