import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@shared/types';

export interface FavoritesState {
  items: Product[];
}

const initialState: FavoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },

    clearFavorites: state => {
      // eslint-disable-next-line no-param-reassign
      state.items = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
