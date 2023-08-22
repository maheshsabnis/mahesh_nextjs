import NavigationLinks from '@/app/navigationlinks'
import React from 'react'
import { ProductInfo } from '../../../../models/productinfo';

interface pageProps   {
  params:{
   productrowid:number
  }
}

async function getProduct(id:number):Promise<ProductInfo>{
  let product:ProductInfo = new ProductInfo(0,'','','','','',0);
  
  let response = await fetch(`http://localhost:3000/api/productinfo?id=${id}`, {
    next:{revalidate:10}
  });
  product = await response.json();
  console.log(`Data = ${JSON.stringify(product)}`);

  return product;
}


const page = async ({params}:pageProps) => {

  const product = await getProduct(params.productrowid);

  if(product === undefined || product.ProductRowId === 0){
    return (
      <div>
          No data to show
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <NavigationLinks/>
        <h1>The Product Info Page : {params.productrowid}</h1>
        
        {/* {
           JSON.stringify(product)
        } */}
        <table className='border-8 mx-auto  p-5 flex-col md:flex-row items-center'>
            <tbody>
              <tr>
               <td className='border-4'>
                 Product Row Id
               </td>
               <td className='border-4'>
                  {product[0][0].ProductRowId}
               </td>
               </tr>
               <tr>
               <td className='border-4'>
                 Product Id
               </td>
               <td className='border-4'>
                  {product[0][0].ProductId}
               </td>
               </tr>
               <tr>
               <td className='border-4'>
                 Product Name
               </td>
               <td>
                  {product[0][0].ProductName}
               </td>
               </tr>
               <tr>
               <td className='border-4'>
                 Category Nae
               </td>
               <td className='border-4'>
                  {product[0][0].CategoryName}
               </td>
               </tr>
               <tr>
               <td className='border-4'>
                 Manufacturere Name
               </td>
               <td>
                  {product[0][0].Manufacturer}
               </td>
               </tr>
               <tr>
               <td className='border-4'>
                 Description
               </td>
               <td className='border-4'>
                  {product[0][0].Description}
               </td>
               </tr>
               <tr>
               <td className='border-4'>
                 Base Price
               </td>
               <td className='border-4'>
                  {product[0][0].BasePrice}
               </td>
               </tr>
            </tbody>
        </table>
    </div>
  )
}

export default page
