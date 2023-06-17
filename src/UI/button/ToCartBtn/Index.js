import React from "react";
import './ToCartBtn.css';
import { IoCartOutline } from 'react-icons/io5'


function ToCartBtn() {
  return ( 
    <button className="to-cart__container">
      <IoCartOutline/>
    </button>
   );
}

export default ToCartBtn;