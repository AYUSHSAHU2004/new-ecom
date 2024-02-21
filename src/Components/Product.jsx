import React from 'react'
//import {items} from './Data'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product({items,cart,setCart}) {


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
           
        <div className='container my-5'>
            <div className='row'>
            {
                items.map((product)=>{
                    return (
                        <>
                        <div className='col-lg-4 my-3 col-md-6'>
                        <div key={product.id} className="card" style={{width: "18rem"}}>
                            <Link to={`/product/:${product.id}`} style={
                                {
                                    display:"flex",
                                    justifyContent:'space-between',
                                    alignItems:'center',
                                    cursor:"pointer"
                                }
                            }>
                               <img src={product.imgSrc} className="card-img-top" alt="..."/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <h6 className="card-text">{product.description}</h6>
                                <p>Rs {product.price}</p>
                                <a href="#" className="btn btn-primary"
                                
                                onClick={()=>addtocart(product.id,product.price,product.title,product.description,product.imgSrc)}
                                >Add to Cart</a>
                            </div>
                        </div>
                        </div>
                        </>
                    );
                })
            }
            </div>
        </div>

    </>
  )
}

export default Product