import React from 'react';
import Slides from '../../components/Carousel/Slides'
import Filter from '../../components/Filter/Filter'
function LandingPage(props) {
  return (
    <div className='landing-page-container'>
      <Slides />
      <Filter />
    </div>
  );
}

export default LandingPage;