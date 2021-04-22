import React from 'react';



import FeatureSection from '../../FeatureSection';
import {feature1,feature2,feature3,feature4,feature5,feature6} from './Data';
import '../../FeaturesSection.css'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  dividerFullWidth: {
    margin: `5px 0 15px ${theme.spacing(0)}px`,
    backgroundColor:" rgb(240 9 81)",
    width: "80%",
    
  },
}));


export default function Features() {
  const classes = useStyles();
  return (
    <div
    id="featurePg"
        className='home__mainf-section'> 
        
        <div className='container'>
        <div class="headingf">Features</div>
               <div
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-easing="ease-out-sine"
                >
                <Divider className={classes.dividerFullWidth} />
                </div>


          <div className='rowf home__mainf-colf'
            style={{
              display: 'flex',
              flexDirection: 'colf'}}>
    <FeatureSection {...feature1}/>
    <FeatureSection {...feature2}/>
    <FeatureSection {...feature3}/>
    <FeatureSection {...feature4}/>
    <FeatureSection {...feature5}/>
    <FeatureSection {...feature6}/>
      {/* f1 end */}
     
  
      
    </div>
    </div>
    </div>
  );
}