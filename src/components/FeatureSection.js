import React from 'react';
import './FeaturesSection.css';
import { IconContext } from 'react-icons/lib';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
      minWidth: 230,
      minHeight:500,
      maxHeight:500,
      padding:9,
      borderRadius: "30px",
      backgroundColor:"#cfd3e3",
      backgroundImage: "linear-gradient(45deg,#02A4DB 10% 12.7%,#333391 70% 75.7% ,#e91388  100% 57.38%);"
    },
    root1: {

      justifyContent:"center",
      alignItems:"center",
    },
    media: {
      height: 0,
      paddingTop: '58.25%', // 16:9
      
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
      marginTop:10,
      
      
      color:"#ffffff",
      
      fontSize:'18px',
      lineHeight:" 28px",
      
      [theme.breakpoints.down('md')]: {
        fontSize:'16px',
        lineHeight:" 24px",
       
      },
      [theme.breakpoints.down('sm')]: {
        fontSize:'14px',
        lineHeight:" 22px",
      },
    },
    paragraph_main:{
      marginTop:20,
      
      
      color:"#ffffff",
      
      fontSize:'18px',
      fontWeight:'bold',
      lineHeight:" 28px",
    },
    image:{
      textAlign:"center"
    }
    
  }));
function FeatureSection({
  title_c,
   subheader_c,
   subheader2_c,
   paragraph1_c,
   subParagraph1_c,
   tag,FeatureInfo,FeatureHeading
}) {
    const classes = useStyles();

  return (
    <>
    <IconContext.Provider value={{ color: '#fff', size: 32 }}>
       
    <div  style={{ margin:"10px"}}>
                
        
      <Paper data-aos="zoom-in-down" className={classes.root} elevation={10} >
      
      <CardContent  className={classes.root1}>   
      <div className={classes.image}>
      <img src="images/features/svg-7.svg" alt="title" width="160px" height="160px"/>
      </div>
        <div className={classes.paragraph_main} >{FeatureHeading}</div>
          <div className={classes.paragraph}>
           {FeatureInfo}
          </div>
          </CardContent>
         
    </Paper>
</div>



      
      
      </IconContext.Provider>
    </>
  );
}

export default FeatureSection