import { createSlice /*, PayloadAction*/ } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

interface CartReducerState {
  hidden: boolean;
}

const initialState: CartReducerState = {
  hidden: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { toggleHidden } = cartSlice.actions;

export default cartSlice.reducer;
