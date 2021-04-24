import React from 'react';
import '../../Pricing.css';

import {card1,card2,card3 } from './Data';
import Pricing from '../../Pricing';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  dividerFullWidth: {
    
    backgroundColor:" rgb(240 9 81)",
    width: "80%",
    margin: `5px 10px 15px 0px;`,
     [theme.breakpoints.down('md')]: {
    margin: `5px 0px 15px 0px;`,
    width: "100%",
  },
  },
}));

function Services() {
  const classes = useStyles();
  return (
    <>
 <div
    id="pricingPg"
        className='home__mainf-section'> 
        
        <div className='container' style={{overflow:"hidden"}}>
        <div class="headingf">Pricing</div>
          <div
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-easing="ease-out-sine"
                > 
                <Divider className={classes.dividerFullWidth} />
              
                 </div>
          <div className='rowf home__mainf-colf'
          //  data-aos="fade-up"
          //  data-aos-anchor-placement="top-bottom"
            style={{
              display: 'flex',
              flexDirection: 'colf'}}>
        {/* <h1 className='pricing__heading'>Pricing</h1> */}
        <Pricing {...card1} /> 
        <Pricing {...card2} /> 
        <Pricing {...card3} /> 
        {/* <Pricing {...card4} /> 
        <Pricing {...card5} />  */}
        </div>
      </div>
        </div> 
    </>
  );
}

export default Services;