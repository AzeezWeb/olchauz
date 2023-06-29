import React, { useEffect, useState } from "react";
import './Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { GoInfo } from 'react-icons/go'
import { IoCartOutline } from 'react-icons/io5'
import CartItem from "./cartItem";
import GetUsetData from "../GetUserData";
import { Link } from "react-router-dom";
import { addToCartSliceAction } from "../../store";

function Cart() {

  const cartItems = useSelector(state => state.addToCart.cartItems)
  const price = cartItems.map((price) => price.price * price.quantity)
  const allPrice = price.reduce((a, b) => a + b , 0)

  const dispatch = useDispatch()
  const [item, setItem ] = useState([])
  const getLocalCartItems = () => {
    const locCartItems = localStorage.getItem('cartItems')
    return locCartItems ? setItem(JSON.parse(locCartItems)) : []
  }

  useEffect(() => {
    getLocalCartItems()
  }, [])


  useEffect(() => {
    item.map(item =>  dispatch(addToCartSliceAction.add(item)))
  },[])

console.log(item);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])


  if(cartItems.length !== 0) {
    return ( 
      <div className="cart container">
        <div className="column">
          <div className="cart-list">
            <h2 className="cart-title"> Savatchada <span>{cartItems.length}</span> mahsulot bor </h2>
            <CartItem cartItems={cartItems}/>
          </div>
          <GetUsetData/>
        </div>
        <div className="column">
          <div className="cart-price"> 
              <h2 className="cart-price__all"> Jami:  {allPrice}     so'm</h2>
              <div className="cart-price__input"> 
                <input placeholder="Promocodni kirgazing"/>
                <button> Kiritish </button>
              </div>
              <div  className='cart-price__des'>
                <b>Qiymati: </b>
                <p> so'm</p>
              </div>
              <div className='cart-price__des'>
                <b> Promokod:</b>
                <p> 0 so'm </p>
              </div>
              <div className='cart-price__des'>
                <b>Ishlatilgan bonuslar : </b>
                <p> 0 so'm </p>
              </div>
              <div className='cart-price__des'>
                <b> Naqt pul to'lash uchun komissiya miqdori:  </b>
                <p> 0 % </p>
              </div>
              <div className='cart-price__des'>
                <b> Yetkazib berish summasi:  </b>
                <p> 0 so'm </p>
              </div>
              <hr></hr>
              <div className='cart-price__des'>
                <b>Yetkazib berish:  </b>
                <p> Kuryer orqali yetqazib berish  </p>
              </div>
              <div className='cart-price__des'>
                <b> To'lov turi: </b>
                <p>  </p>
              </div>
              <div className='cart-price__des'>
                <b>Buyirtma turi: </b>
                <b> To'liq to'lash </b>
              </div>
              <div className="cart-price__des">
                <span> <GoInfo/> Siz ro'yxatdan o'tmagansiz !</span>
              </div>
              <button className="order-btn"> Buyurtma berish</button>
              <p className="cart-price__bottom-offer"> 
                "Buyurtma berish" tugmansini bosish orqali
                <span> ommaviy taklif shartnomasiga</span>
                roziman
              </p>
          </div>
          <div className="cart-price__label">
            <h2> Bonuslar: </h2>
            <div className="cart-price__input"> 
                <input />
                <button> Kiritish </button>
              </div>
          </div>
        </div>
      </div>
     );
  } else {
      return (
        <div className="cart-empty">
            <IoCartOutline/>
            <h2>Savatchangiz bo'sh</h2>
            <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
            <Link to='/'>
              <button>Asosiy sahifaga </button>  
             </Link>
        </div>
      )
  }



  
}

export default Cart;