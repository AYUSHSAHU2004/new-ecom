import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Cart({cart,setCart,count,setCount,ind,setInd,vcart,setVcart}) {
  const [sel,setsel]=useState(0);
  const [ca,setCa]=useState([]);
  

  function rem(seli){
      
      const ncart = cart.filter((ncar)=>ncar.id != seli); 
      setCart(ncart);
  }
  function remDel(index){
    let n = {count}
    setInd(index);

    count=count-1;
    return(
      
        
        setCount(count)
      
      
    )
  }
  function ReT(id,price,title,description,imgSrc){
    

    
  }
 
  
  console.log(ca);
  
  
   return(
    
    <>
      
    
        <div className='upper'>
        {cart.map((car,index)=>{
          return(
            <div key={car.id} className="card" style={{width: "18rem"}}>
                            <Link to={`/product/:${car.id}`} style={
                                {
                                    display:"flex",
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    cursor:"pointer"
                                }
                            }>
                               <img src={car.imgSrc} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{car.title}</h5>
                                <h6 className="card-text">{car.description}</h6>
                                <p>Rs {car.price}</p>
                                <a href="#" className="btn btn-primary"
                                
                                onClick={()=>{
                                  remDel(index);
                                  rem(car.id);
                                  ReT(car.id,car.price,car.title,car.description,car.imgSrc);
                                }}
                                >REMOVE</a>
                            </div>
                        </div>
          )
        })}
        </div>
      
    </>
    
   
      
    

   )
  
 
    

  
  
}

export default Cart