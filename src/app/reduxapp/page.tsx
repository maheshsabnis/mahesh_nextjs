'use client'
import React, {useCallback} from 'react'

import {useGetProductsQuery} from '@/redux/services/productapi';

import {getProductsReducer,reset} from '@/redux/feature';
import {useAppDispatch,useAppSelector} from '@/redux/hooks';
import DataTable from '../datatable';
import { ProductInfo } from '../../../models/productinfo';
import { ProductState, initialState } from '@/redux/state';

import ListProductsComponent from './listcategoriescomponent';

const Page = () => {
  const products = useAppSelector((state)=>state.productReducer.products);
  const dispatch = useAppDispatch();  

  const {isLoading,isFetching,error,data} = useGetProductsQuery(null);

//   const getData=()=>{
//     dispatch(getProductsReducer(new Array<ProductInfo>()));
//   };


//   const getRemoteData = useCallback(
//     (state:ProductState)=>dispatch(getProductsReducer(new Array<ProductInfo>())), 
//     [dispatch]
//   );
  return (
    <div className='container mx-auto  p-5 flex-col md:flex-row items-center'>
       <button className='bg-green-500 text-white font-bold py-2 px-4 rounded'
         
       >Get Data</button>

{/* <button onClick={() => dispatch(increment())}>increment</button> */}
     
        {
        error?( <strong>
            No data
        </strong>):isLoading || isFetching ? (
            <strong>
                Loading
            </strong>
        ): data ? (
             JSON.stringify(data)
        ):null   
        }       
    </div>
  )
}

export default Page
