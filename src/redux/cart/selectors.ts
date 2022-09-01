import { RootState } from "../store";
import { CartItem } from "./types";

export const selectCart = (state: RootState) => {
    return state.cartSlice;
  };
  
  export const selectCartItemById = (id: string) => (state: RootState) =>
    state.cartSlice.items.find((obj: CartItem) => obj.id === id);
  
  
  
  export const selectCartSec = (state: RootState) => {
    return state.cartSlice.items;
  };