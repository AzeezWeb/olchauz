import React from "react";
import './CartItem.css'
import ToCartBtn from "../../../UI/button/ToCartBtn/Index";
import data from "../../../Data";

function CartItem() {

  const product = data.products[0].items[0].items[0]
  console.log(product);
  return ( 
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={product.img[0]} alt={product.typeOf}/>
      </div>
      <div className="cart-item__des">
        <div>
          <p className="cart-item__name" >
            {product.name}
          </p>
          <ToCartBtn/>
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
   );
}

export default CartItem;