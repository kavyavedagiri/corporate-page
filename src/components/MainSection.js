import React from 'react';
import './MainSection.css';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from './Button';

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



function MainSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
 

  return (
    <>
      <div 
        className={lightBg ? 'home__main-section' : 'home__main-section darkBg'}
      > 
       {/* */}
        <div   className='container' style={{overflow:"hidden"}}>
          
        
              
              
           
            
          <div data-aos="zoom-in-down"
            className='row home__main-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__main-text-wrapper'>
                {/* <div className='top-line'>{topLine}</div> */}

                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>

               
                <p
                  className=  'home__main-subtitle'
                     
                  
                >
                  {description}
                </p>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                    {buttonLabel}
                  </Button>
              </div>
            </div>
            
          </div>
          
        </div>
      
      </div>
    </>
  );
}

export default MainSection