import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: 0,
  sort: { name: 'популярности', sortProperty: 'raiting' },
  pageCount: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },

    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { setProducts, setSort, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
