import { NextRequest, NextResponse } from "next/server";
import ExcuteQuery from "../../../../dataaccess/db";
import { ProductInfo } from "./../../../../models/productinfo";
export async function GET(req: NextRequest){

   let {searchParams,pathname} = new URL(req.url);
   console.log(`Parameters ${req.nextUrl}`);
   console.log(`id = ${req.url}`);
   
   const id = searchParams.get('id');
   console.log(`id = ${id}`);
   if(id === null){

   const data = await ExcuteQuery("Select * from ProductInfo");
   console.log('====================================');
   console.log(` Query Executed ${data}`);
   console.log('====================================');
   return NextResponse.json(data);
    } else {
      console.log(`Receiced Product Id  =${id}`);
      const data = await ExcuteQuery("Select * from ProductInfo where ProductRowId = " + id);
      console.log('====================================');
      console.log(` Query Executed ${JSON.stringify(data)}`);
      console.log('====================================');
      return NextResponse.json(data);
   }

}

export async function POST(req:NextRequest){

   const body = await req.json();
   console.log(`Received Boidy ${JSON.stringify(body)}`);
   const product: ProductInfo = new ProductInfo(
      0, body.ProductId, body.ProductName,
      body.CategoryName, body.Manufacturer,
      body.Description, parseInt(body.BasePrice)   
   );

   console.log(`Received Data ${JSON.stringify(product)}`);

   const query:string = `Insert into ProductInfo (ProductId, ProductName,CategoryName,Manufacturer,Description,BasePrice) values ('${product.ProductId}', '${product.ProductName}', '${product.CategoryName}','${product.Manufacturer}', '${product.Description}', ${product.BasePrice})` ;

   console.log(query);

   const data = await ExcuteQuery(query);
   return NextResponse.json(data); 
}