import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log('thrown');
    return cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
  }
);
