import React from 'react'
import NavigationLinks from '../navigationlinks'
import { ProductInfo } from '../../../models/productinfo'
import Link from 'next/link';

async function getProducts():Promise<ProductInfo[]>{
  let products:ProductInfo[] = new Array<ProductInfo>();
  
  let response = await fetch('http://localhost:3000/api/productinfo', {
    next:{revalidate:10}
  });
  products = await response.json();
  console.log(`Data = ${JSON.stringify(products)}`);

  return products;
}

 



const ProductInfoComponent =async() => {

   const products = await getProducts();

  if(products === undefined || products.length === 0){
    return (
       <div>
          <strong>No Data to Show</strong> 
       </div>
    )
  }
  const columns = Object.keys(products[0][0]);
  return (
  
    <div className='container mx-auto  p-5 flex-col md:flex-row items-center'>
         <NavigationLinks/> 
        <h1>The Product Info Component</h1>
         <button className='bg-red-700 text-white font-bold py-2 px-4 rounded'>
            <Link href={'/productinfo/add'}>Add New</Link>
          </button>
         <table className='border-8 mx-auto  p-5 flex-col md:flex-row items-center'>
            <thead className='bg-yellow-400'>
              <tr>
                {
                   columns.map((column,index)=>(
                     <th className='border-4' key={index}>{column}</th>
                   ))
                }
              </tr>
            </thead>
            <tbody>
              {
                 products[0].map((product:ProductInfo,index:number)=>(
                   <tr key={index}>
                      {
                         columns.map((column,index)=>(
                          <td className='border-4' key={index}>{product[column]}</td>
                        ))
                      }
                      <td className='border-4 '>
                        <button className='bg-yellow-500 text-white font-bold py-2 px-4 rounded'> 
                         <Link  href={`/productinfo/${product.ProductRowId}`}
                         >
                          <strong >
                          Show Details
                          </strong>
                         </Link>
                         </button>
                      </td>
                   </tr>
                 ))
              }
            </tbody>
         </table>
    </div>
  )
}

export default ProductInfoComponent;
