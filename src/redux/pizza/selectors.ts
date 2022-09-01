import { RootState } from "../store";

export const selectPizza = (state: RootState) => {
    return state.pizzaSlice;
  };