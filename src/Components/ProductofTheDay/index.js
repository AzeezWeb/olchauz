import React, { useState } from "react";
import "./ProductOfTheDay.css";
import data from "../../Data";

function ProductOfTheDay() {
  const product = data.productOfTheDay;
  const [currentIndex, setCurrentIndex] = useState(2);
  const oldPrise = product[currentIndex].price / product[currentIndex].discount;
  const newPrise = product[currentIndex].price - oldPrise;
  const toCredit = product[currentIndex].price / 12;

  const goToSlide = (productIndex) => {
    setCurrentIndex(productIndex);
  };
  return (
    <div>
      <div className="product-container">
        <div className="product-items">
          <div>
            <h2> Kun mahsuloti</h2>
          </div>
          <div>
            <p className="product-discount">
              - {product[currentIndex].discount}%
            </p>
            <div className="product-img">
              <img
                src={product[currentIndex].img}
                alt={product[currentIndex.name]}
              />
            </div>
            <p className="product-name">{product[currentIndex].name}</p>
            <div className="product-price">
              <p className="product-new__price">{newPrise.toFixed()} so'm</p>
              <p className="product-old__price">
                {product[currentIndex].price} so'm{" "}
              </p>
            </div>
            <p className="product-to__credit">
              {toCredit.toFixed()} so'm x 12 oy{" "}
            </p>
          </div>
        </div>
        <div className="circle-box">
          {product.map((product, productIndex) => (
            <span
              key={productIndex}
              className={
                productIndex === currentIndex ? "circle active" : "circle"
              }
              onClick={() => goToSlide(productIndex)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductOfTheDay;
