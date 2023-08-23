import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "../state";
import { ProductInfo } from "../../../models/productinfo";

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        reset:()=>initialState,
        getProductsReducer:(state, action:PayloadAction<Array<ProductInfo>>)=>{
            state.products = action.payload;
        },
        getProductByProductRowIdReducer:(state, action:PayloadAction<ProductInfo>)=>{
            state.products.push(action.payload);
        }
    }
});

export const {reset,getProductsReducer,getProductByProductRowIdReducer} = productSlice.actions;

export default productSlice.reducer;