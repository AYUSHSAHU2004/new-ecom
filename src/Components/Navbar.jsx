import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Product from './Product'
import { items } from './Data';
function Navbar({change,count}) {

  const [searchItem,setSearchItem] = useState("");
  const Navigate = useNavigate();
  function Filter(categori){
        let filArr = items.filter((pro)=>pro.category == categori);
        console.log(filArr);
        change(filArr);

  }
  const handlleSubmit = (e) =>{
    e.preventDefault();
    Navigate(`/search/${searchItem}`);
  }
  function Filters(pri){
    let filtsArr = items.filter((pr)=>pr.price == "pri");
    change(filtsArr);
    console.log(filtsArr);
  }
  
  return (
   <><header className='sticky-top'>
    <div >
    <div className='nav-bar' >
        <Link to={"/"} className='brand'>CHAMAZON</Link>
        <form onSubmit={handlleSubmit} className='search-bar'>
            <input type="text"
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}
            placeholder='Search product'></input>
        </form>
        <div className='carting'>
            <div className='list'>{count}</div>
            <Link to={"/cart"} className='cart'><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </div>
    <div className='nav-bar-wrapper' >
        <div className='items'>Filter by {"->"}</div>
        <Link to={"/"} className='items' onClick={()=>change(items)}>ALL</Link>
        <Link to={"/"} className='items' onClick={()=>Filter("mobiles")}>Mobiles</Link>
        <Link to={"/"} className='items' onClick={()=>Filter("laptops")}>Laptops</Link>
        <Link to={"/"} className='items' onClick={()=>Filter("tablets")}>Tablets</Link>
        <div to={"/"} className='items' onClick={()=>Filters("29900")}>{">="}29900</div>
        <div to={"/"} className='items' onClick={()=>Filters("39900")}>{">="}39900</div>
        <div to={"/"} className='items' onClick={()=>Filters("59900")}>{">="}59900</div>
        <div to={"/"} className='items' onClick={()=>Filters("49900")}>{">="}49900</div>
    </div>
    </div>
    </header>
   </>
  )
}

export default Navbar