import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk('users/fetchPizza', async (params) => {
  const { sort, order, category, pageCount } = params;
  const response = await axios.get(
    `https://62e77c5193938a545bd2a755.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sort}&order=${order}`,
  );
  return response.data;
});

const initialState = {
  items: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [fetchPizza.fulfilled]: (state, action) => {
      state.status = 'loading';
      state.items = [];
    },

    [fetchPizza.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },

    [fetchPizza.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
