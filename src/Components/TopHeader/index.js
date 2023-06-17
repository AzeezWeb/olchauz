import React from "react";
import './TopHeader.css'

function TopHeader() {
  return ( 
  <>
    <div className="header-top__container">
      <div>
          <ul>
            <li> O% Muddatli to'lov</li>
            <li> Chegirmalar </li>
            <li> Yutuqli o'yinlar </li>
            <li> Sayt xaritasi </li>
          </ul>
       </div>
       <div>
          <strong> + 7(981) 769 76 11</strong>
          <p> olcha da soting</p>
          <ul>
            <li>Узб</li>
            <li className="active">O'z</li>
            <li>Рус</li>
          </ul>
       </div>
    </div>
  </> );
}

export default TopHeader;