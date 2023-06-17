import React from "react";
import './FavoriteBtn.css'
import { MdFavoriteBorder } from 'react-icons/md'

function FavoriteBtn() {

  return ( 
    <button className="favorite-btn__container">
      <MdFavoriteBorder/>
    </button>
   );
}

export default FavoriteBtn;