import React from 'react';
import './Testimonial.css';


import TestimonialItem from './TestimonialItem'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const responsive = {
  0: { items: 1 },
  500: { items: 2 },
  868: { items: 2 },
  1100: { items: 3 },
  1824: { items: 4}
};


function TestimonialSection() {

const items = [
  <div className="item" data-value="1">
    <TestimonialItem/>
  </div>,
  <div className="item" data-value="2">
   <TestimonialItem/>
  </div>,

  <div className="item" data-value="3">
    <TestimonialItem/>
  </div>,
  <div className="item" data-value="4">
    <TestimonialItem/>
  </div>,

  <div className="item" data-value="5">
    <TestimonialItem/>
  </div>,
];
  
  return (
    <div>
     
       <div
    id="testimonialPg"
        className='home__mainT-section darkBg' style={{overflow:"hidden"}}> 
      
        
        <div class="headingT">Testimonial</div>
       
      
            <AliceCarousel
            mouseTracking
            infinite
            autoPlay
            autoPlayInterval={3000}
            animationDuration={3000}
            paddingLeft={20}
            paddingRight={20}
            disableButtonsControls
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            />

      
</div>
</div>

   
  )
}

export default TestimonialSection