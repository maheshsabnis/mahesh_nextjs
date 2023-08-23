import { ProductInfo } from "../../../models/productinfo"

export type ProductState = {
    products:Array<ProductInfo>
}

export const initialState = {
    products:new Array<ProductInfo>
} as ProductState; 