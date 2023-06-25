import React, { useState } from "react";
import "./ProductImgSlider.css";
import LeftArrow from "../../UI/button/ArrowBtns/LeftArrow";
import RightArrow from "../../UI/button/ArrowBtns/RightArrow";

function ProductImgSlider({ imgs }) {
  const [currentindex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevios = () => {
    const isFirstSlide = currentindex === 0;
    const newIndex = isFirstSlide ? imgs.length - 1 : currentindex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastIndex = currentindex === imgs.length - 1;
    const newIndex = isLastIndex ? 0 : currentindex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseOut = () => {
    setActive(false)
    setMousePos({})
  };

  const handleMouseMove = (e) => {
    setActive(true)
    const localX = e.clientX - e.target.offsetLeft;
    const localY = e.clientY - e.target.offsetTop;
    setMousePos({ x: localX, y: localY });
  };

  const imgstyle = {
    transform: `scale( 1.5, 1.5) translate(-${mousePos.x/ 15}%, ${mousePos.y / 25}%)`
  }

  return (
    <div className="product-slider">
      <div
        className="slider-main__img"
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        <img src={imgs[currentindex]} alt="" style={active ? imgstyle : null} />
      </div>
      <div className="slider-imgs">
        <button onClick={goToPrevios}>
          <LeftArrow />
        </button>
        <button onClick={goToNext}>
          <RightArrow />
        </button>
        {imgs.map((img, index) => {
          return (
            <div
              className={
                currentindex === index ? "slider-img active" : "slider-img"
              }
              key={index}
              onClick={() => goToSlide(index)}
            >
              <img src={img} alt={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImgSlider;
