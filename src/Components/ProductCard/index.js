import React from "react";
import './ProductCard.css';
import ToCartBtn from "../../UI/button/ToCartBtn/Index";
import ToCreditBtn from "../../UI/button/ToCreditBtn";
import FavoriteBtn from "../../UI/button/FavoriteBtn";
import CompereBtn from "../../UI/button/CompereBtn";
import ToCartBtn2 from "../../UI/button/ToCartBtn2/Index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function ProductCard( { items} ) {
  
  const cartItems = useSelector(state => state.cartItems)
  return items.map((product, key) => {
   const btns =  cartItems.length !== 0
      ? cartItems.map((el , index) => {
        if(el.id === product.id) {
          return <ToCartBtn2 quantity={el.quantity}  index={index} key={index}/>
        } else {
          return (
          <div key={index}>
            <ToCartBtn product={product}/>
            <ToCreditBtn/>
          </div>
          )
        }
      })
      :  <div key={product.id}>
            <ToCartBtn product={product}/>
            <ToCreditBtn/>
         </div>

    return (
        
        <div className="product-card" key={key}>
              <div className="product-card__action">
                <FavoriteBtn/>
                <CompereBtn/>
              </div>
              <Link to={`/product/view/${product.name}`}>
                <div className="product-card__img">
                    <img src={product.img[0]} alt="img"/>
                </div>
                <div className="product-card__des"> 
                    <p className="product-card__name"> {product.name}</p>
                    <p className="product-card__price"> {product.Narxi} so'm</p>
                    <p className="product-card__price-to-credit"> {(product.price / 12).toFixed() } so'm x 12 oy</p>
                </div>
              </Link>
              <div className="product-card__btns" >
                { btns }
              </div>
            </div>
    )
 } ) 
   
}

export default ProductCard;