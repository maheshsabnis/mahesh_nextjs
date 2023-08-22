import { NextRequest, NextResponse } from "next/server";
import { Database } from "../../../../database/db/database";
import { Manufacturer } from "../../../../database/models/manufacturer";
import { Product } from "../../../../database/models/products";
import { ProductCatalog } from "../../../../database/models/productcatalog";
import axios from "axios";


export async function GET(request:NextRequest){
    let db = new Database();
    let {searchParams,pathname} = new URL(request.url);
    const manufacturerName = searchParams.get('manufacturerName');
    if(manufacturerName === null || manufacturerName === undefined || manufacturerName?.length === 0){
        return NextResponse.json("Sorry No Data")
    } else {
        /* Define Collections */
        let manufacturers: Array<Manufacturer>;
        let products: Array<Product>;
        let productCatalog: Array<ProductCatalog> =  new Array<ProductCatalog>();
        
        /* Get Manufacturers */
        let manResponse = await axios.get('http://localhost:3000/api/manufacturers');
        manufacturers = manResponse.data;

        /* Check if the response contains the Manufacturer based in ManufacturerId */
        let man = manufacturers.filter((m,i)=>{
            return m.ManufacturerName.trim() === manufacturerName.trim();
        });
        if(man.length === 0)
            return NextResponse.json("No Record found based on the Data Submitted by you");

        /* read all products */
        let prodResponse = await axios.get('http://localhost:3000/api/products');
        products = prodResponse.data;    

        /* Now read products for the ManufacturerId */
        let filterProducts = products.filter((prd,i)=>{
            return prd.ManufacturerId === man[0].ManufacturerId;
        });  
        
        /* Now Generate the catalog */
        for(let p of filterProducts){
            let tax = p.Price * 0.1;
            let totalPrice = p.Price + tax; 
            productCatalog.push(new ProductCatalog(
                p.ProductName,
                man[0].ManufacturerName,
                p.Price,
                tax,
                totalPrice
            ));
        }

        /* return response of the Catalog */
        return NextResponse.json(productCatalog);
    }

}