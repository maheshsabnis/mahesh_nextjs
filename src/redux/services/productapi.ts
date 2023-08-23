import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductInfo } from "../../../models/productinfo";
import build from "next/dist/build";

export const productApi = createApi({
    reducerPath:"productApi",
    refetchOnFocus:true,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/"
    }),
    endpoints:(builder)=>({
        getProducts: builder.query<ProductInfo[],null>({
            query:()=> "productinfo"
        }),
        getProductByProductRowId:builder.query<ProductInfo, {id:number}>({
            query:({id})=>`productInfo?id=${id}`
        }),
    }),

}); 

export const {useGetProductByProductRowIdQuery, useGetProductsQuery} = productApi;