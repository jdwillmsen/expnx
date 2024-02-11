import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { CategoryService } from './category.service';

import {
  categoryActionSuccess,
  getCategoriesActions,
} from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly categoryService: CategoryService,
    private actions$: Actions
  ) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesActions),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => categoryActionSuccess(categories)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
