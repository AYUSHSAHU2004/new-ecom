import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {items} from './Data';
function Productdetail() {
  const {id} = useParams();
  const[itemName,setittemName]=useState({});
  const[suggest,setSuggest]=useState([]);
  useEffect(()=>{
    const filterProduct = items.filter((product)=>`:${product.id}` == id);
    setittemName(filterProduct[0]);
    
    const Suggests = items.filter((product)=>product.category == itemName.category);
    
    //working
    setSuggest(Suggests);
    //console.log(suggest);//not working

  },[id,itemName.category]);
 
  console.log(suggest);
  
  return (
    <>
        <div className='container'>
            <div  className='img'>
                <img  src={itemName.imgSrc}></img>
            </div>
            <div>
                <h1>
                    {itemName.title}
                </h1>
                <h2 style={{color:"green",fontWeight:800}}>
                    ${itemName.price}
                </h2>
                <h3>
                    {itemName.description}
                </h3>
                <button>
                    Add To Cart
                </button>
            </div>
        </div>
        <div className='suggestion'>
            {suggest.map((sug)=>{
                return(
                    <div>
                        <div className="card" style={{width:"18rem"}}>
                            <img src={sug.imgSrc} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{sug.title}</h5>
                                <p className="card-text">{sug.description}</p>
                                <a href="#" className="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Productdetail