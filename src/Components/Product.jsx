import React from 'react'
//import {items} from './Data'
import { Link } from 'react-router-dom';
function Product({items}) {
  return (
    <>
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
                                <a href="#" className="btn btn-primary">Add to Cart</a>
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