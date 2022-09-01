import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: [],
  reducers: {
    addToCart(product, state){
      state.push(product);
    }
  }
})

export const {addToCart} = shopSlice.actions

export default shopSlice.reducer;
