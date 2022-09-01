import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortState } from './types';



const initialState: FilterSliceState = {
  products: 0,
  sort: { name: 'популярности', sortProperty: 'raiting' },
  pageCount: 1,
  size: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<number>) {
      state.products = action.payload;
    },

    setSizes(state, action: PayloadAction<number>) {
      state.size = action.payload;
    },


    setSort(state, action:PayloadAction<SortState>) {
      state.sort = action.payload;
    },

    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
  },

  
});


export const { setProducts, setSort, setPageCount, setSizes } = filterSlice.actions;





export default filterSlice.reducer;
