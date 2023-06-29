import React from "react";
import './ProductCard.css';
import ToCartBtn from "../../UI/button/ToCartBtn/Index";
import ToCreditBtn from "../../UI/button/ToCreditBtn";
// import FavoriteBtn from "../../UI/button/FavoriteBtn";
import CompereBtn from "../../UI/button/CompereBtn";
import ToCartBtn2 from "../../UI/button/ToCartBtn2/Index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { favoriteSliceAction } from "../../store";

function ProductCard( { items} ) {
  
  const dispatch = useDispatch()

  const addToFavorite = (product) => {
    dispatch(favoriteSliceAction.addToFavorite(product))
  }
  const deleteToFavorite = (product) => {
    dispatch(favoriteSliceAction.deleteToFavorite(product))
  }

  const favoritItems = useSelector(state => state.favorite.favoritItems)
  const inFavorite = favoritItems.some(item => item.id === items.id)



  const cartItems = useSelector(state => state.addToCart.cartItems)
  const inCart = cartItems.some(item => item.id === items.id)


  const quantity = () => cartItems.filter(item => item.id === items.id);

  return (
    <div className="product-card" >
          <div className="product-card__action">
            {inFavorite 
             ? <div className="red"> <MdFavorite onClick={() =>deleteToFavorite(items)}/></div>
             : <div className="black"><MdFavoriteBorder  onClick={() =>addToFavorite(items)}/></div>
            } 
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
            {/* {btns} */}
            { inCart 
              ?  <ToCartBtn2 quantity={quantity()} />
              : <>
                    <ToCartBtn product={items}/>
                    <ToCreditBtn/>
                </>
            }
          </div>
        </div>
)
   
}

export default ProductCard;