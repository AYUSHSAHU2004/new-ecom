import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
function SearchItem() {
  const [fildata,setfilData] = useState([]);
  let {term} = useParams();
  useEffect(()=>{
    const filterdData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      console.log(data);
      setfilData(data);
    }
    filterdData();
  },[term])
  return (

    <Product items={fildata}/>
  )
}

export default SearchItem