import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { productActions } from './product.actions';
import { ProductService } from './product.service';

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap(() =>
        productService.getProducts().pipe(
          map((products) => productActions.productSuccess({ products })),
          catchError((error) => of(productActions.productFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const loadProductsByCategory = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.loadProductByCategory),
      exhaustMap((action) =>
        productService.getProductByCategory(action.category).pipe(
          map((products) => productActions.productSuccess({ products })),
          catchError((error) => of(productActions.productFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);
