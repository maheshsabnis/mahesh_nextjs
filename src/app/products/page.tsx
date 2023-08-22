'use client'
import React, {useEffect, useState} from 'react'
import { Product } from '../../../database/models/products';
import axios from 'axios';
import NavigationLinks from '../navigationlinks';
import DataTable from '../datatable';

const Products = () => {
  const [products,setProducts]=useState<Array<Product>>([]);  
  const[message,setMessage] = useState('');
  useEffect(()=>{
      axios.get('http://localhost:3000/api/products')
            .then((resp)=>setProducts(resp.data))
            .catch((error)=>{
                setMessage(error);
            });
  });  
  return (
    <div>
      <NavigationLinks/>  
      <DataTable dataSource={products}></DataTable>
    </div>
  )
}

export default Products;
