import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectFavoritesState = (state: RootState) => state.favorites;

export const selectFavoritesItems = createSelector(
  [selectFavoritesState],
  favorites => favorites.items,
);

export const selectFavoritesCount = createSelector(
  [selectFavoritesItems],
  items => items.length,
);

export const selectIsFavorite = (productId: string) =>
  createSelector([selectFavoritesItems], items =>
    items.some(item => String(item.id) === String(productId)),
  );
