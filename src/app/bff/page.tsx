'use client'

import React, { useState } from 'react'
import { ProductCatalog } from '../../../database/models/productcatalog';
import axios from 'axios';
import DataTable from '../datatable';
import NavigationLinks from '../navigationlinks';
 

const BFF = () => {
  const [name,setName] = useState('');  
  const [message,setMessage] = useState('');
  const [catelog, setCatelog] = useState<Array<ProductCatalog>>([]);
  const getProductCatalog=()=>{
    axios.get(`http://localhost:3000/api/bff?manufacturerName=${name}`)
         .then((response)=>{
             setCatelog(response.data);
         }).catch((error)=>{
            setMessage(error);
         })   
  };  
   
  return (
    <div>
        <NavigationLinks/>
       <label>Enter the Manufacturere to search Products:</label>
       <input value={name} placeholder='Enter manufacturer name'
         onChange={(evt)=>setName(evt.target.value)}/>
         <button className='bg-green-500 text-white font-bold py-2 px-4 rounded'
             onClick={getProductCatalog}
            >Save</button>
         <hr/>
         <DataTable dataSource={catelog}></DataTable>
    </div>
  )
}

export default BFF
