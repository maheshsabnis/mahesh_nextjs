import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productReducer  from '../feature';

import { productApi } from "../services/productapi";

export const store = configureStore({
    reducer: {
        productReducer,
        [productApi.reducerPath] : productApi.reducer
    },
    
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;