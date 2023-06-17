import React from "react";
import './ProductCard.css';
import data from "../../Data";
import ToCartBtn from "../../UI/button/ToCartBtn/Index";
import ToCreditBtn from "../../UI/button/ToCreditBtn";
import FavoriteBtn from "../../UI/button/FavoriteBtn";
import CompereBtn from "../../UI/button/CompereBtn";

function ProductCard( { p}) {
  
  const product = data.products[0].items[0].items[0];
  console.log(product)

  return ( 
    <div className="product-card">
      <div className="product-card__action">
        <FavoriteBtn/>
        <CompereBtn/>
      </div>
      <div className="product-card__img">
          <img src={product.img[0]} alt="img"/>
      </div>
     <div className="product-card__des"> 
        <p className="product-card__name"> {product.name}</p>
        <p className="product-card__price"> {product.price} so'm</p>
        <p className="product-card__price-to-credit"> {(product.price / 12).toFixed() } so'm x 12 oy</p>
        <div className="product-card__btns">
          <ToCartBtn/>
          <ToCreditBtn/>
        </div>
     </div>
    </div>
   );
}

export default ProductCard;