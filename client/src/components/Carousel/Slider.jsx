
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function Slides(props) {
  const [imageCounter, setImageCounter] = useState(0)
  const length = props.products.length

  return (
    <div className = 'slider-container'>
      {props.products.map((product, index) => (
        <img src={product.imgURL} alt="food item"/>
      ))}
    </div>
  );
}

export default Slides;