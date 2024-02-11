import { CategoryState } from './category.reducer';

export const selectCategoryState = (state: CategoryState) => state;

export const selectCategories = (state: CategoryState) => state.categories;

export const selectError = (state: CategoryState) => state.error;
