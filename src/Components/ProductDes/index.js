import React from "react";
import './ProductDes.css'


function ProductDes( { description }) {
  console.log(description);
  return ( 
    <ul className="product-des__list">
      {description.map((item) => (
        <li className="product-des__item">
        <div><span> {item[0]}</span></div>
        <div><span>{item[1]}</span></div>
      </li>
      ))}
    </ul>
  );
}

export default ProductDes;