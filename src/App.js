import React from 'react'; 
import './App.css';
import BottomHeader from './Components/BottomHeader';
import TopHeader from './Components/TopHeader';
import Home from './Pages/Home';
import { Route,  Routes } from 'react-router-dom';
import Catalog from './Components/Catalog';
import Cart from './Components/Cart';


function App() {
  
  

  return (
    <div className="App">
      <TopHeader/>
      <BottomHeader/>
    
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='catalog/:product' element={<Catalog/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
