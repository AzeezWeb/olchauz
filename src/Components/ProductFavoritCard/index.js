import React from "react";
import './ProductCard.css';
import ToCartBtn from "../../UI/button/ToCartBtn/Index";
import ToCreditBtn from "../../UI/button/ToCreditBtn";
import CompereBtn from "../../UI/button/CompereBtn";
import ToCartBtn2 from "../../UI/button/ToCartBtn2/Index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai'
import { favoriteSliceAction } from "../../store";

function ProductFavoriteCard( { items} ) {
  console.log(items);
  const dispatch = useDispatch()

  const deleteToFavorite = (product) => {
    dispatch(favoriteSliceAction.deleteToFavorite(product))
  }

  const cartItems = useSelector(state => state.addToCart.cartItems)
  
  const btns =  cartItems.length !== 0
  ? cartItems.map((el , index) => {
    if(el.id === items.id) {
      return <ToCartBtn2 quantity={el}  key={index}/>
    } else {
      return (
      <div key={index}>
        <ToCartBtn product={items}/>
        <ToCreditBtn/>
      </div>
      )
    }
  })
  :  <div key={items.id}>
        <ToCartBtn product={items}/>
        <ToCreditBtn/>
     </div>
   return (
       <div className="product-card" >
             <div className="product-card__action">
               <AiOutlineDelete onClick={() => deleteToFavorite(items)}/>
               <CompereBtn/>
             </div>
             <Link to={`/product/view/${items.name}`}>
               <div className="product-card__img">
                   <img src={items.img[0]} alt="img"/>
               </div>
               <div className="product-card__des"> 
                   <p className="product-card__name"> {items.name}</p>
                   <p className="product-card__price"> {items.price} so'm</p>
                   <p className="product-card__price-to-credit"> {(items.price / 12).toFixed() } so'm x 12 oy</p>
               </div>
             </Link>
             <div className="product-card__btns" >
               {btns}
             </div>
           </div>
   )
   
}

export default ProductFavoriteCard;