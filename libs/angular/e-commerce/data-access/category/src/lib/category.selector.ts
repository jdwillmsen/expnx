import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CategoryState, categoryReducer } from './category.reducer';

const categoryFeatureKey = 'category';

export const selectCategoryState =
  createFeatureSelector<CategoryState>(categoryFeatureKey);

export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);

export const selectError = (state: CategoryState) => state.error;

export const categoryFeature = createFeature({
  name: categoryFeatureKey,
  reducer: categoryReducer,
});
