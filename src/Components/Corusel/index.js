import React, { useState } from "react";
import './Corusel.css'
import LeftArrow from "../../UI/button/ArrowBtns/LeftArrow";
import RightArrow from "../../UI/button/ArrowBtns/RightArrow";



function Corusel( { children }) {
  
  const [translate, setTranslate] = useState(0)
  const coruselStyle = { transform: `translate(-${translate}px)` }

  

  


  const goToNext = () => {
    if(translate < 700) {
      setTranslate(translate + 200)
    }
  }


  const goToPrevios = () => {
    if(translate > 0) {
      setTranslate(translate - 200)
    }
  }


  return ( 
    <div className="corusel-container">
      <LeftArrow goToPrevios={goToPrevios}/>
      <div className="corusel-items" >
          <div className="corusel-item" style={coruselStyle}>
             {children}
          </div>
      </div>
      <RightArrow goToNext={goToNext}/>
    </div>
   );
}

export default Corusel;