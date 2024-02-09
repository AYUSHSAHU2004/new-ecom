import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import { items } from './Data';
function Navbar({change}) {
  const [count,setCount]=useState(0);
  function filter(categori){
        let filArr = items.filter((pro)=>pro.category == categori);
        console.log(filArr);
        change(filArr);

  }
  return (
   <><header className='sticky-top'>
    <div >
    <div className='nav-bar' >
        <Link to={"/"} className='brand'>E-cart</Link>
        <div className='search-bar'>
            <input type="text" placeholder='Search product'></input>
        </div>
        <div className='carting'>
            <div className='list'>{count}</div>
            <Link to={"/cart"} className='cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </div>
    <div className='nav-bar-wrapper' >
        <div className='items'>Filter by {"->"}</div>
        <Link to={"/"} className='items' onClick={()=>change(items)}>ALL</Link>
        <Link to={"/"} className='items' onClick={()=>filter("mobiles")}>Mobiles</Link>
        <Link to={"/"} className='items' onClick={()=>filter("laptops")}>Laptops</Link>
        <Link to={"/"} className='items' onClick={()=>filter("tablets")}>Tablets</Link>
        <div className='items'>{">="}29900</div>
        <div className='items'>{">="}39900</div>
        <div className='items'>{">="}49900</div>
        <div className='items'>{">="}59900</div>
    </div>
    </div>
    </header>
   </>
  )
}

export default Navbar