import React from "react";
import './CatalogLink.css'
import { Link } from "react-router-dom";
import BgImg from './../../imgs/catalogLinkBgIng.png'

function CatalogLink( { img, type} ) {

  const bgImg = {
    borderRadius: "12px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${BgImg}})`,
  }

  return ( 
    <Link className="catalog-link"> 
        <div className="catalog-link__box">
          <img className="catalog-link__bg" src={BgImg} alt="bgimg"/>
          <img className="catalog-link__img" src={img} alt={type}/>
        </div>
        <p className="catalog-link__title">{type}</p>
    </Link>
   );
}

export default CatalogLink;