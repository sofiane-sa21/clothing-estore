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
    return cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
  }
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
      0
    );
  }
);
