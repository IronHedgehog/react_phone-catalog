import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@shared/types';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      // TODO: Add a check to ensure that the quantity does not go below 1

      if (existingItem) {
        if (existingItem.quantity === 1) {
          //TODO: Add a confirmation dialog before removing the item from the cart
          // TODO: fix eslint-disable-next-line no-param-reassign
          // eslint-disable-next-line no-param-reassign
          state.items = state.items.filter(item => item.id !== action.payload);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      // eslint-disable-next-line no-param-reassign
      state.items = [];
    },
  },
});

export const { addToCart, decrementQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
