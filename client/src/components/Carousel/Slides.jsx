import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
function Slides(props) {

  return (
    <div className = 'slides-container'>
      <Carousel infiniteLoop useKeyboardArrows autoPlay >

      </Carousel>
    </div>
  );
}

export default Slides;