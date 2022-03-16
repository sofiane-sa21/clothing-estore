import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './user/user.slice';
import cartReducer from './cart/cart.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
