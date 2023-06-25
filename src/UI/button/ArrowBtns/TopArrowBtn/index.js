import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import "./TopArrow.css";

function TopArrow() {

  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
    else {
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={visible ? "top-arrow active" : "top-arrow"}
      onClick={scrollToTop }
    >
      <BsArrowUp />
    </button>
  );
}

export default TopArrow;
