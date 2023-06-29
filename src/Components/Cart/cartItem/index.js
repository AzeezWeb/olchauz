import React from "react";
import './CartItem.css'
import ToCartBtn2 from "../../../UI/button/ToCartBtn2/Index";
import { Link } from "react-router-dom";

function CartItem( { cartItems }) {
  return cartItems.map((product, index) => {
    const quantity = [cartItems[index]]
    return (
      <div className="cart-item" key={index}>
      <div className="cart-item__img">
        <img src={product.img[0]} alt={product.typeOf}/>
      </div>
      <div className="cart-item__des">
        <div>
          <Link to={`/product/view/${product.name}`}>
            <p className="cart-item__name" >
              {product.name}
            </p>
          </Link>
          <ToCartBtn2 quantity={quantity}/>
          <p className="cart-item__price">
            {product.price} so'm
          </p>
        </div>
        <div className="cart-item__btns">  
          <button> Sevimlilarga qo'shish</button>
          <button> O'chirish</button>
        </div>
      </div>
    </div>
    )
  })
}

export default CartItem;