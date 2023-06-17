import React from "react";
import './RightArrow.css'
import { IoIosArrowForward } from 'react-icons/io'

function RightArrow( { goToNext }) {



  return ( 
    <div className="Right-arrow" onClick={goToNext}>
      <IoIosArrowForward/>
    </div>
   );
}

export default RightArrow;