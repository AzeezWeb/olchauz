import React from "react";
import './GetUserData.css'
import InputMask from 'react-input-mask';



function GetUsetData() {
  return ( 
    <div className="get-user__data">
          <h2> Sizning ma'lumotlaringiz</h2>
          <form>
            <div>
              <span>Ism va familiye</span>
              <input type="text"/>
            </div>
            <div>
              <span>Telefon</span>
              <InputMask mask='+(999) 999-99-99' /> 
               
         
            </div>
          </form>
        </div>
   );
}

export default GetUsetData;