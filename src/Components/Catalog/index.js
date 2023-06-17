import React from "react";
import { useParams } from "react-router-dom";
import './Catalog.css'
import data from "../../Data";
import CatalogMenu from "../CatalogMenu";
import CatalogLink from "../CatalogLink";
import Corusel from "../Corusel";
import { IoIosArrowForward } from 'react-icons/io'
import ProductCard from "../ProductCard";

function Catalog() {
  const params = useParams()
  const product = data.products.filter((p) => p.type === params.product);
  console.log(product);
  return ( 
    <>
      <div className="catalog-container">
        <h1 className="catalog-title"> {product[0].title}</h1>
        <div className="row">
          <CatalogMenu product={product[0]}/>
          <div className="catalog-items">
              <div className="subcategory-list">
                {product[0].items.map((item, i) => ( <CatalogLink img={item.img} type={item.type} key={i}/>)) }
              </div>
              {product[0].items.map((item) => {
                if(item.items.length !== 0 ) {
                  return (
                    <div className="product-cards"> 
                      <div className="product-sub__title">
                        <h1>{ item.type}</h1>
                        <div>
                          <p>BARCHASINI KO'RISH </p>
                          <IoIosArrowForward/>
                        </div>
                      </div>
                        <Corusel>
                        {item.items.map((product) => (
                          <ProductCard product={product}/>
                        ))}
                         </Corusel>
                  </div>
                  )
                } else { return null} 

                
              })}
              
          </div>
        </div>
      </div>
    </>
   );
}

export default Catalog;