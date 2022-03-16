import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { CustomUser } from '../../models/custom-user';

interface UserReducerState {
  currentUser: CustomUser | null;
}

const initialState: UserReducerState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CustomUser | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
