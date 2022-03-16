import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export default userSlice.reducer;
