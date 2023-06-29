import React from "react";
import './ProductDes.css'


function ProductDes( { description }) {
  return ( 
    <ul className="product-des__list">
      {description.map((item, i) => (
        <li className="product-des__item" key={i}>
        <div><span> {item[0]}</span></div>
        <div><span>{item[1]}</span></div>
      </li>
      ))}
    </ul>
  );
}

export default ProductDes;