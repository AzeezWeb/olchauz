import React from "react";
import './ToCartBtn.css';
import { useDispatch } from "react-redux";
import { addToCartSliceAction } from "../../../store";


function ToCartBtn2( { quantity }) {

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addToCartSliceAction.increment(quantity[0]))
  }
  const decremenrt = () => {
    dispatch(addToCartSliceAction.decrement(quantity[0]))
  }
  
  return ( 
    <div  className="to-cart__container to-cart__btn2 ">
      <button onClick={decremenrt}></button>
      <p>{quantity[0].quantity}</p>
      <button onClick={increment}></button>
    </div>
   );
}

export default ToCartBtn2;