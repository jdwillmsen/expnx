import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'category/:categoryName',
    loadComponent: () =>
      import('@expnx/angular/e-commerce/feature/product').then(
        (m) => m.ProductComponent
      ),
  },
];
