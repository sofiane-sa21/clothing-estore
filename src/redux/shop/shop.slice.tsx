import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '../../models/shop';

interface DirectoryState {
  collections: {
    [key: string]: Collection;
  } | null;
}

const initialState: DirectoryState = {
  collections: {},
};

const directorySlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    updateCollections: (
      state,
      action: PayloadAction<{ [key: string]: Collection }>
    ) => {
      state.collections = action.payload;
    },
  },
});

export const { updateCollections } = directorySlice.actions;

export default directorySlice.reducer;
