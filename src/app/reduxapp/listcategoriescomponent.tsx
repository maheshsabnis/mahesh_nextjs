'use client'
import React, {useEffect} from 'react';
import { ProductInfo } from '../../../models/productinfo';

interface dataProps {
    products:Array<ProductInfo>,
 getData: Function
}
 
const ListProductsComponent = (props:dataProps) => {

  /* Recived the cached callback execution from the parent */
   
  useEffect(()=>{
      props.getData({...props.products});
     console.log(`Data in Component ${props.products}`);
  },[]);
  
  
  if(props.products === undefined || props.products.length === 0) {
    return (
        <div className='alert alert-danger'>
            <strong>
                No Data to Show
            </strong>
        </div>
      )
  }  
  return (
    <div className='container'>
       <h1>List of Products</h1>
       <table className='table table-bordered table-striped'>
         <thead className='table-dark'>
             <tr>
                 <th>Product Row Id</th>
                 <th>Product Id</th>
                 <th>Product Name</th>
                 <th>Category Name</th>
                 <th>Manufacturere</th>
                 <th>Description</th>
                 <th>Base Price</th>
             </tr>
         </thead>
         <tbody className='table-warning'>
            {
                props.products.map((prd,index)=>(
                    <tr key={index}>
                      <td>{prd.ProductRowId}</td>
                      <td>{prd.ProductId}</td>
                      <td>{prd.ProductName}</td>
                      <td>{prd.CategoryName}</td>
                      <td>{prd.Manufacturer}</td>
                      <td>{prd.Description}</td>
                      <td>{prd.BasePrice}</td>
                    </tr>
                ))
            }
         </tbody>
       </table>
    </div>
  )
}

export default ListProductsComponent;
