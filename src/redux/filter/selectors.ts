import { RootState } from "../store";

export const filterSort = (state : RootState) => {
    return state.filterSlice;
  };
  
  export const filterSelectSort = (state : RootState) => {
    return state.filterSlice.sort;
  };
  
export const filterSelectSearch = (state : RootState) => {
    return state.filterSlice.searchValue;
};
  