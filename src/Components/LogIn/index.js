import React from "react";
import './LogIn.css'
import InputMask from 'react-input-mask'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { logInSliceAction } from "../../store";



function LogIn() {

  const dispatch = useDispatch()
  const logIn = useSelector(state => state.logIn.active)
    
  const logInHandler = () => {
    dispatch( logInSliceAction.active())
  }


  return (  
    <div className={logIn ? "login active" : "login"}>
       <div className="login-box">
          <AiOutlineClose onClick={logInHandler} />
          <h1>
            Tizimga kirish yoki profil yaratish
          </h1>
          <label>
            Telefon raqami
          </label>
          <div className="login-input">
            <p>+998</p>
            <InputMask mask="99 999 99 99" />
          </div>
          <span className="input-span1"> Telefon raqamini maydoni majburiy to'ldirishingiz lozim</span>
          <span className="input-span2"> Telefon raqamini maydoni uzunligi 12 bo'lishi lozim</span>

          <button> Tasdiqlash</button>
        </div>
    </div>
  );
}

export default LogIn;