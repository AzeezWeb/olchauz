import React from "react";
import './CompereBtn.css';
import { BiBarChart } from 'react-icons/bi'

function CompereBtn() {
  return ( 
    <button className="compere-btn__container">
      <BiBarChart/>
    </button>
   );
}

export default CompereBtn;