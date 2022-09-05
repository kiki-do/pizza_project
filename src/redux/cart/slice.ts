import { calcTotalPrice } from './../../utils/calcTotalPrice.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS.ts';
import { CartSliceState, CartItem } from './types.ts';



 
const {items, totalPrice} = getCartFromLS();

const initialState: CartSliceState = getCartFromLS();
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) findItem.count++;
      else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    

    removeItem(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter((obj: CartItem) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items)
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) findItem.count--;
      state.totalPrice = calcTotalPrice(state.items)
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;



export default cartSlice.reducer;
