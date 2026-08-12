import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  cart => cart.items,
);

export const selectCartTotalItems = createSelector([selectCartItems], items =>
  items.reduce((total, item) => total + item.quantity, 0),
);

export const selectCartTotalPrice = createSelector([selectCartItems], items =>
  items.reduce((total, item) => total + item.price * item.quantity, 0),
);
