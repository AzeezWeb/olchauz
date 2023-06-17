import React, { useState, useEffect, useRef, useCallback } from "react";
import "./HeroSlider.css";
import data from "../../Data";
import ProductOfTheDay from "../ProductofTheDay";

function HeroSlider() {
  const sliderItems = data.sliderItems;
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${sliderItems[currentIndex].img})`,
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const goToPrevios = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastIndex = currentIndex === sliderItems.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sliderItems]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <>
      <div className="slider-container">
        <div className="slider-one">
          <div className="left-arrow" onClick={goToPrevios}></div>
          <div className="right-arrow" onClick={goToNext}></div>
          <div style={slideStyle}> </div>
          <div className="circle-box">
            {sliderItems.map((slide, slideIndex) => (
              <span
                className={
                  currentIndex === slideIndex ? "circle active" : "circle"
                }
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              ></span>
            ))}
          </div>
        </div>
        <ProductOfTheDay/>
      </div>
    </>
  );
}

export default HeroSlider;
