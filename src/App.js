import React from 'react'; 
import './App.css';
import BottomHeader from './Components/BottomHeader';
import TopHeader from './Components/TopHeader';
import Home from './Pages/Home';
import { Route,  Routes } from 'react-router-dom';
import Catalog from './Components/Catalog';
import Cart from './Components/Cart';
import TopArrow from './UI/button/ArrowBtns/TopArrowBtn';
import Product from './Components/Product';


function App() {
  
  

  return (
    <div className="App">
      <TopHeader/>
      <BottomHeader/>
      <TopArrow/>
    
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='catalog/:product' element={<Catalog/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='product/view/:name' element={<Product/>} />
      </Routes>
   
    </div>
  );
}

export default App;
