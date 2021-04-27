import React from 'react';
import './Testimonial.css';

import { makeStyles } from '@material-ui/core/styles';
import TestimonialItem from './TestimonialItem'
import {
      CardContent,

    Typography,
    
    
 
  
} from '@material-ui/core';
// import { IconContext } from 'react-icons/lib';
 import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

import  CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,

    minWidth: 120,
    minHeight:320,
    maxHeight:320,
    borderRadius: "20px",
    elevation:9,
    alignItems:"center",
   
    backgroundColor:"#F2F2F2"
   
  },
  media: {
    height: 0,
    paddingTop: '58.25%', // 16:9

  },
  dividerFullWidth: {
    
    backgroundColor:" rgb(240 9 81)",
    width: "80%",
    margin: `5px 10px 15px 60px;`,
    [theme.breakpoints.down('md')]: {
    margin: `5px 0px 15px 0px;`,
    width: "100%",
  },
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  paragraph:{
    margin:10,
    
    color:"#1c2237",
    fontStyle: 'italic',
    fontSize:'12px'
  },
 
}));
const responsive = {
  0: { items: 1 },
  500: { items: 2 },
  868: { items: 2 },
  1100: { items: 3 },
  1824: { items: 4}
};


function TestimonialSection() {
  const classes = useStyles();
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