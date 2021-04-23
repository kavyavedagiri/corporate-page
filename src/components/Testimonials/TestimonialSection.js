import React from 'react';
import './Testimonial.css';
// import autoBind from "auto-bind"
// import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import {
      CardContent,

    Typography,
    
    
 
  
} from '@material-ui/core';
// import { IconContext } from 'react-icons/lib';
// import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

import  CardActionArea from '@material-ui/core/CardActionArea';
//import CustomButtonGroupAsArrows from './CustomArrows'
import Paper from '@material-ui/core/Paper';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Divider from '@material-ui/core/Divider';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,

    minWidth: 150,
    
    justifyContent:'center',
    alignItems:"center",
    textAlign:"center",

   
  },
  media: {
    height: 0,
    paddingTop: '58.25%', // 16:9
    justifyContent:'center',
  },
  dividerFullWidth: {
    margin: `5px 5px 0px 20%`,
    backgroundColor:" rgb(240 9 81)",
    width:"80%"
    
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
    textAlign:"center",
    color:"#1c2237",
    fontStyle: 'italic',
    fontSize:'12px'
  },
 
}));
const responsive = {
  0: { items: 1 },
  500: { items: 1 },
  868: { items: 1 },
  1200: { items: 2 },
  1824: { items: 3}
};


function TestimonialSection() {
  const classes = useStyles();
const items = [
  <div className="item" data-value="1">
    <div style={{margin:"20px"}} >
    <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="80px" height="80px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    
    </Paper>
    </div>
  </div>,
  <div className="item" data-value="2">
    <div style={{margin:"20px"}} >
        <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="80px" height="80px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    
    </Paper>
    </div>
  </div>,

  <div className="item" data-value="3">
    <div style={{margin:"20px"}} >
        <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="80px" height="80px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    
    </Paper>
    </div>
  </div>,
  <div className="item" data-value="4">
    <div style={{margin:"20px"}} >
        <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="80px" height="80px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    
    </Paper>
    </div>
  </div>,

  <div className="item" data-value="5">
<div style={{margin:"20px"}} >
<Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="80px" height="80px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    
    </Paper>
    </div>
  </div>,
];
  
  return (
    <div>
       <div
    id="testimonialPg"
        className='home__mainT-section darkBg'> 
      
        <div className='container'>
        <div class="headingT">Testimonial</div>
        <div
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-easing="ease-out-sine"
                >
                <Divider className={classes.dividerFullWidth} />
                </div>
        <div>
       
        <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={3000}
        animationDuration={3000}

        disableButtonsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />

</div>
</div>
</div>
   </div>
  )
}

export default TestimonialSection