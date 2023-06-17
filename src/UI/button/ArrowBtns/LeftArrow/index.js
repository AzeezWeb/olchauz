import React from "react";
import './LeftArrow.css'
import { IoIosArrowBack } from 'react-icons/io'


function LeftArrow( { goToPrevios }) {

  return ( 
    <div className="leftt-arrow" onClick={goToPrevios}>
      <IoIosArrowBack/>
    </div>
   );
}

export default LeftArrow;