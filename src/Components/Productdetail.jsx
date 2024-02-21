import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {items} from './Data';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Productdetail({cart,setCart}) {
  const {id} = useParams();
  const[itemName,setittemName]=useState({});
  const[suggest,setSuggest]=useState([]);
  useEffect(()=>{
    const filterProduct = items.filter((product)=>`:${product.id}` == id);
    setittemName(filterProduct[0]);
    
    const Suggests = items.filter((product)=>product.category == itemName.category);
    
    
    setSuggest(Suggests);
    

  },[id,itemName.category]);
 
  

  function addtocart(id,price,title,description,imgSrc){
    const obj = {
        id,price,title,description,imgSrc
    }
    setCart([...cart,obj]);
    

    toast.success('ADDED TO CART', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark"
        
        });
}

  
  return (
    <>

<ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                
                />
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
                <button onClick={()=>addtocart(itemName.id,itemName.price,itemName.title,itemName.description,itemName.imgSrc)}>
                    Add To Cart
                </button>
            </div>
        </div>
        <div className='suggestion' style={{cursor:"pointer"}}>
            {suggest.map((sug)=>{
                return(
                    <div>
                        <div className="card" style={{width:"18rem"}}>
                            <Link to={`/product/:${sug.id}`} style={
                                {
                                    display:"flex",
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    cursor:"pointer"
                                }
                            }>
                                <img src={sug.imgSrc} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{sug.title}</h5>
                                <p className="card-text">{sug.description}</p>
                                <a href="#" className="btn btn-primary" onClick={()=>addtocart(itemName.id,itemName.price,itemName.title,itemName.description,itemName.imgSrc)}>Add To Cart</a>
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