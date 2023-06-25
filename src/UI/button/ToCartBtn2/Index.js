import React from "react";
import './ToCartBtn.css';
import { useDispatch } from "react-redux";
import { addToCartSliceAction } from "../../../store";


function ToCartBtn2( { quantity, index }) {


  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addToCartSliceAction.increment(index))
  }
  const decremenrt = () => {
    dispatch(addToCartSliceAction.decrement(index))
  }
  
  return ( 
    <div  className="to-cart__container to-cart__btn2 ">
      <button onClick={decremenrt}></button>
      <p>{quantity}</p>
      <button onClick={increment}></button>
    </div>
   );
}

export default ToCartBtn2;