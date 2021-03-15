import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./SmallSlider.css";

function SmallSlider({ products }) {
  const [imageCounter, setImageCounter] = useState(0);
  const length = products.length;

  setTimeout(() => {
    setImageCounter(imageCounter === length - 1 ? 0 : imageCounter + 1);
  }, 3000);

  const nextSlide = () => {
    clearTimeout();
    setImageCounter(imageCounter === length - 1 ? 0 : imageCounter + 1);
  };

  const prevSlide = () => {
    clearTimeout();
    setImageCounter(imageCounter === 0 ? length - 1 : imageCounter - 1);
  };

  if (!Array.isArray(products) || products.length <= 0) {
    return null;
  }

  return (
    <div className="small-slider-container">
      <FaArrowAltCircleLeft className="slider-left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="slider-right-arrow"
        onClick={nextSlide}
      />
      {products.map((product, index) => (
        <div
          className={index === imageCounter ? "slider-active" : "slide"}
          key={index}
        >
          {index === imageCounter && (
            <img
              src={product.imgURL}
              alt="food item"
              className="small-slider-image"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default SmallSlider;
