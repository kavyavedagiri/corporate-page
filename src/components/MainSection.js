import React from 'react';
import './MainSection.css';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  dividerFullWidth: {
    margin: `0px`,
    backgroundColor:" rgb(240 9 81)",
    
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
  const classes = useStyles();

  return (
    <>
      <div 
        className={lightBg ? 'home__main-section' : 'home__main-section darkBg'}
      >
        <div   className='container'>
          <div
            className='row home__main-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__main-text-wrapper'>
                <div className='top-line'>{topLine}</div>

              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-out-sine"
                >
                <Divider className={classes.dividerFullWidth} />
                </div> 


                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__main-subtitle'
                      : 'home__main-subtitle dark'
                  }
                >
                  {description}
                </p>
                
              </div>
            </div>
            <div className='col'>
              <div className='home__main-img-wrapper'>
                <img src={img} alt={alt} className='home__main-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection