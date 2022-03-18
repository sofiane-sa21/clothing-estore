import { createSlice } from '@reduxjs/toolkit';

import SHOP_DATA from './shop.data';

const initialState = {
  collections: SHOP_DATA,
};

const directorySlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export default directorySlice.reducer;
