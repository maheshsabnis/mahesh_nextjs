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
        {
           JSON.stringify(product)
        }
        <table>
            <tbody>
              <tr>
               <td>
                 Product Row Id
               </td>
               <td>
                  {product.ProductRowId}
               </td>
               </tr>
               <tr>
               <td>
                 Product Id
               </td>
               <td>
                  {product.ProductId}
               </td>
               </tr>
               <tr>
               <td>
                 Product Name
               </td>
               <td>
                  {product.ProductName}
               </td>
               </tr>
               <tr>
               <td>
                 Category Nae
               </td>
               <td>
                  {product.CategoryName}
               </td>
               </tr>
               <tr>
               <td>
                 Manufacturere Name
               </td>
               <td>
                  {product.Manufacturer}
               </td>
               </tr>
               <tr>
               <td>
                 Description
               </td>
               <td>
                  {product.Description}
               </td>
               </tr>
               <tr>
               <td>
                 Base Price
               </td>
               <td>
                  {product.BasePrice}
               </td>
               </tr>
            </tbody>
        </table>
    </div>
  )
}

export default page
