import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Productdetail from './Components/Productdetail';
import { items } from './Components/Data';
import Cart from './Components/Cart';
import SearchItem from './Components/SearchItem';
import { useState } from 'react';
function App() {
  const [data,setData] = useState([...items]);
  return (
    <>
      <BrowserRouter>
        <Navbar change={setData}/>
        <Routes>
          <Route path='/' element={<Product items={data}/>}/>
          
          <Route path='/product/:id' element={<Productdetail/>}/>
          <Route path='/search/:term' element={<SearchItem/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
        </Routes>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
