import React, { useState } from "react";
import "./SmallSlider.css";

function SmallSlider({ products }) {
  const [imageCounter, setImageCounter] = useState(0);
  const length = products.length;

  
  const nextSlide = () => {
    clearTimeout();
    setImageCounter(imageCounter === length - 1 ? 0 : imageCounter + 1);
    console.log(imageCounter);
  };
  
  const prevSlide = () => {
    clearTimeout();
    setImageCounter(imageCounter === 0 ? length - 1 : imageCounter - 1);
  };
  
  setTimeout(() => {
    setImageCounter(imageCounter === length - 1 ? 0 : imageCounter + 1);
  }, 3000);

  if (!Array.isArray(products) || products.length <= 0) {
    return null;
  }

  return (
    <div className="small-slider-container">
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
