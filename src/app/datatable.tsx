import { columns } from 'mssql';
import React from 'react'

type dataProps= {
    dataSource:Array<any>;
}

const DataTable = (props:dataProps) => {
  if(props.dataSource === undefined || props.dataSource.length === 0 || props.dataSource === null){
    return (
        <div>
            No Data to Show
        </div>
    )
  }
  let columns = Object.keys(props.dataSource[0]); 
  return (

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
                props.dataSource.map((product:any,index:number)=>(
                   <tr key={index}>
                      {
                         columns.map((column,index)=>(
                          <td className='border-4' key={index}>{product[column]}</td>
                        ))
                      }
                   </tr>
                 ))
              }
            </tbody>
         </table>
  )
}

 

export default DataTable
