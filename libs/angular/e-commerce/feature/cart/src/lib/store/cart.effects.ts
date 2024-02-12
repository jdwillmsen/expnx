import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { CartService } from './cart.service';
import { cartActions } from './cart.actions';

export const loadCart = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCart),
      exhaustMap(() =>
        cartService.getCart().pipe(
          map((cart) => cartActions.cartSuccess({ cart })),
          catchError((error) => of(cartActions.cartFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);
