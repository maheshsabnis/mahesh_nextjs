'use client'
import React, {useEffect, useState} from 'react'
import { Manufacturer } from '../../../database/models/manufacturer';
import axios from 'axios';
import NavigationLinks from '../navigationlinks';
import DataTable from '../datatable';

const Manufacturers = () => {
  const [manufacturers,setManufacturers]=useState<Array<Manufacturer>>([]);  
  const[message,setMessage] = useState('');
  useEffect(()=>{
      axios.get('http://localhost:3000/api/manufacturers')
            .then((resp)=>setManufacturers(resp.data))
            .catch((error)=>{
                setMessage(error);
            });
  });  
  return (
    <div>
      <NavigationLinks/>
      <hr/>
      <DataTable dataSource={manufacturers}></DataTable>
    </div>
  )
}

export default Manufacturers;
