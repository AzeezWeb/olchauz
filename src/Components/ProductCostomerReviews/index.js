import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./ProductCustomerReviews.css";
import { useDispatch } from "react-redux";
import { logInSliceAction } from "../../store";

function ProductCustomerReviews() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch()
  
  
  const  logIn = () => {
    dispatch( logInSliceAction.active())
  }
  
  
  return (
    <>
      <div className="product-detalies__accordion">
        <button
          onClick={() => setActive(true)}
          className={
            active
              ? "product-detalies__accordion-btn active"
              : "product-detalies__accordion-btn "
          }
        >
          Mahsulot haqida sharhlar
          <span>0</span>
        </button>
        <button
          onClick={() => setActive(false)}
          className={
            active
              ? "product-detalies__accordion-btn "
              : "product-detalies__accordion-btn active"
          }
        >
          Mahsulot haqida savollar
          <span>0</span>
        </button>
      </div>
      {active ? (
        <div className="product-detalies__reiting-widget">
          <div>
            <h4>Hali sharhlar yo'q, lekin siz birinchi bo'lishingiz mumkin</h4>
            <p>
              Xarid qilish haqida fikringizni bildiring va boshqa xaridorlarga
              tanlov qilishga yordam bering
            </p>
          </div>
          <div className="product-detalies__reiting-widget-btn">
            <div>
              <h2> 0</h2>
              <div className="product-star">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
            <button onClick={logIn}> Sharh qoldirish</button>
          </div>
        </div>
      ) : (
        <div className="product-detalies__reiting-widget">
          <div>
            <h4>Hali savollar yo'q, lekin siz birinchi bo'lishingiz mumkin</h4>
          </div>
          <div className="product-detalies__reiting-widget-btn">
            <button onClick={logIn}> Savol qoldirish</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCustomerReviews;
