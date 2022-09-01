import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizzaState, PizzaItems, PizzaSliceState } from './types';

export const fetchPizza = createAsyncThunk<PizzaItems[], fetchPizzaState>('users/fetchPizza', async (params) => {
  const { sort, order, category, pageCount } = params;
  const response = await axios.get(
    `https://62e77c5193938a545bd2a755.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sort}&order=${order}`,
  );
  return response.data;
});

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItems[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    })

    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    })

    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    })
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;


