import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

import { Item } from '../../models/shop';
import { RootState } from '../store';

export interface CartItem extends Item {
  quantity: number;
}

interface CartReducerState {
  hidden: boolean;
  cartItems: CartItem[];
}

const initialState: CartReducerState = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
  },
});

export const { toggleHidden, addItem } = cartSlice.actions;

export default cartSlice.reducer;
