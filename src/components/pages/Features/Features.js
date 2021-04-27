import React from 'react';



import FeatureSection from '../../FeatureSection';
import {feature1,feature2,feature3,feature4,feature5,feature6} from './Data';
import '../../FeaturesSection.css'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  dividerFullWidth: {
    
    backgroundColor:" rgb(240 9 81)",
    width: "80%",
    margin: `5px 10px 15px 60px;`,
     [theme.breakpoints.down('md')]: {
    margin: `5px 0px 15px 0px;`,
    width: "100%",
  },
  },
 
}));


export default function Features() {
  const classes = useStyles();
  return (
    <div
    id="featurePg"
        className='home__mainf-section'> 
        
        <div className='containerf' style={{overflowX:"hidden"}}>
        
          <div class="headingf" style={{overflow:"hidden"}}>Features</div>
            

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