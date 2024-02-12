/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';
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
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () =>
      import('@expnx/angular/e-commerce/feature/product').then(
        (m) => m.ProductComponent
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
        (m) => m.ProductComponent
      ),
    providers: [
      provideState(productFeature),
      provideEffects({ loadProducts, loadProductsByCategory }),
    ],
  },
];
