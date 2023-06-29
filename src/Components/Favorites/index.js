import React from "react";
import './Favorites.css'
import { useSelector } from "react-redux";
import ProductFavoriteCard from "../ProductFavoritCard";

function Favorites() {

  const favoritItems = useSelector(state => state.favorite.favoritItems)
 
  console.log(favoritItems);

  return ( 
    <div className="container">
      <div className="favorite-box">
        <h2>Sevimli mahsulotlar</h2>
       <div className="favorite-items">
        {favoritItems.map((product, i) => (
            <ProductFavoriteCard  items={product} key={i}/>
          ))}
       </div>
      </div>

    </div>
   );
}

export default Favorites;