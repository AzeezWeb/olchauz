import React from "react";
import './CatalogMenu.css'

function CatalogMenu( {product} ) {
  
  const catalog = product;
  return ( 
    <div className="catalog-menu__container">
       <ul>
          {catalog.items.map((item, i) => (
            <li className="catalog-items" key={i}>
              <p className="catalog-item__title">{item.type}</p>
              <ul className="catalog-items__list" key={item.img}>
                {item.items.map((product, i) => (
                  <li className="catalog-item" key={i}>
                    {product.type}
                  </li>
                ))}
              </ul>
            </li>
          ))}
       </ul>
    </div>
   );
}
export default CatalogMenu;