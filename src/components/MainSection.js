import React from 'react';
import './MainSection.css';
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
                <div className='top-line'>{topLine}</div>

                <div
                data-aos="fade-right"
                data-aos-offset="500"
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