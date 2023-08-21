'use client'
import React, {useState} from 'react'
import { ProductInfo } from '../../../../models/productinfo'
import NavigationLinks from '@/app/navigationlinks';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Page = () => {
   
  const [product,setProduct] = useState<ProductInfo>({
    ProductRowId:0,ProductId:'',ProductName:'',CategoryName:'',Manufacturer:'',Description:'',BasePrice:0
  });  

  const categories = ["Electronics","Electrical", 'Food', 'Fashion', 'Home'];
  const manufacturers = ["MS-Electronics","MS-Electrical", 'MS-Food', 'MS-Fashion', 'MS-HomeAppliances'];


  const clear=()=>{
     setProduct({
        ProductRowId:0,ProductId:'',ProductName:'',CategoryName:'',Manufacturer:'',Description:'',BasePrice:0
      });
  };

  const save= async()=>{
    alert(JSON.stringify(product));
     const response = await fetch('http://localhost:3000/api/productinfo', {
         method: 'POST',
         body: JSON.stringify(product),
         headers:{
            'Content-Type':'application/json'
         }
     }); 
     
  };

  return (
    <div className="container mx-auto  p-5 flex-col md:flex-row items-center">
        <NavigationLinks/>
        <div className='mb-4'>
            <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2" >Product Id</label>
            <input type="text"  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             placeholder='Product Id'
             value={product.ProductId}
             onChange={(evt)=>setProduct({...product, ProductId:evt.target.value})}
             />
        </div>
        <div className='mb-4'>
            <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
            <input type="text"  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Product Name'
            value={product.ProductName}
            onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}
            />
        </div>
        <div className='mb-4'>
            <label htmlFor="CategoryName" className="block text-gray-700 text-sm font-bold mb-2">Category Name</label>
            <select  title='' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='CategoryName' placeholder='Category Name'
            value={product.CategoryName}
            onChange={(evt)=>setProduct({...product, CategoryName:evt.target.value})}
            >
                <option>Select Category</option>
                {
                    categories.map((cat,idx)=>(
                        <option key={idx} value={cat}>{cat}</option>
                    ))
                }
            </select>
        </div>
        <div className='mb-4'>
            <label htmlFor="Manufacturer" className="block text-gray-700 text-sm font-bold mb-2">Manufacturer</label>
            <select  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='Manufacturer'
            value={product.Manufacturer}
            onChange={(evt)=>setProduct({...product, Manufacturer:evt.target.value})}
            >
                <option>Select Manufacturer</option>
                {
                    manufacturers.map((man,idx)=>(
                        <option key={idx} value={man}>{man}</option>
                    ))
                }
            </select>
        </div>
        <div className='mb-4'> 
            <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Description'
            value={product.Description}
            onChange={(evt)=>setProduct({...product, Description:evt.target.value})}
            />
        </div>
        <div className='mb-4'>
            <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Base Price</label>
            <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Base Price'
            value={product.BasePrice}
            onChange={(evt)=>setProduct({...product, BasePrice:parseInt(evt.target.value)})}
            />
        </div>
        <div className='mb-4'>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
             onClick={clear}
            >Clear</button>
            <button className='bg-green-500 text-white font-bold py-2 px-4 rounded'
             onClick={save}
            >Save</button>
        </div>
        <Link href={'/productinfo'}>Back to List</Link>
    </div>
  )
}

export default Page
