import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/slice.ts';
import cartSlice from './cart/slice.ts';
import pizzaSlice from './pizza/slice.ts';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;