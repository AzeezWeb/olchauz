import React from "react";
import './Cart.css'
import CartItem from "./cartItem";

function Cart() {
  return ( 
    <div className="cart container">
      <div className="column">
        <div className="cart-list">
          <h2 className="cart-title"> Savatchada mahsulot bor </h2>
          <CartItem/>
        </div>
      </div>
      <div className="column">
        <div className="cart-price"> 
            <h2 className="cart-price__all"> Jami:       so'm</h2>
            <div className="cart-price__input"> 
              <input placeholder="Promocodni kirgazing"/>
              <button> Kiritish </button>
            </div>
        </div>
      </div>
    </div>
   );
}

export default Cart;