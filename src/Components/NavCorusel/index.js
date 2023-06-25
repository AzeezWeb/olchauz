import React, { useState } from "react";
import './NavCorusel.css'
import data from "../../Data";
import { Link } from "react-router-dom";
function NavCorusel() {

  const NavItems = data.products; 
  const [translate, setTranslate] = useState(0)
  const coruselStyle = {
    transform: `translate(-${translate}px)`
  }


  const goToNext = () => {
    if(translate < 1350) {
      setTranslate(translate + 200)
    }
  }

  const goToPrevios = () => {
    if(translate > 0) {
      setTranslate(translate - 200)
    }
  }

  return ( 
    <>
      <div className="nav-corusel__container">
          <button className="nav-left__arrow" onClick={goToPrevios}>  </button>
          <ul className="nav-list" style={coruselStyle}>
              {NavItems.map((item) => (
                <li className="nav-item" key={item.type}>
                <Link to={`/catalog/${item.type}`}>
                  <img className="nav-item__img" src={item.img} alt={item.type}/>
                  <p className="nav-item__name">{item.title}</p> 
                </Link>
              </li>
              ))}
          </ul>
          <button className="nav-right__arrow" onClick={goToNext}> </button>
      </div>
    </>
   );
}

export default NavCorusel;