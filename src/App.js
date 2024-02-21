import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import Productdetail from './Components/Productdetail';
import { items } from './Components/Data';
import Cart from './Components/Cart';
import SearchItem from './Components/SearchItem';
import { useState } from 'react';
function App() {
  const [data,setData] = useState([...items]);
  const[ind,setInd]=useState(0);
  const [cart,setCart] = useState([]);
  const [vcart,setVcart]=useState(cart);
  console.log(cart.length);
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log(ind);
    setCount(cart.length);//changed
  },[cart])
  return (
    <>
      <BrowserRouter>
       <scrollToTop>
        <Navbar change={setData} count={count}/>
        <Routes>
          <Route path='/' element={<Product items={data} cart={cart} setCart={setCart}  />}/>
          
          <Route path='/product/:id' element={<Productdetail  cart={cart} setCart={setCart} />}/>
          <Route path='/search/:term' element={<SearchItem/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} count={count} setCount={setCount} ind={ind} setInd={setInd} vcart={vcart} setVcart={setVcart}/>}/>
          
        </Routes>
        </scrollToTop>
      </BrowserRouter>
      
    </>
  );
}

export default App;
