import React from 'react';
import './FeaturesSection.css';
import { IconContext } from 'react-icons/lib';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import  CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
      minWidth: 230,
      minHeight:480,
      padding:9,
      borderRadius: "30px",
      backgroundColor:"#cfd3e3",
      backgroundImage: "linear-gradient(45deg,#02A4DB 10% 12.7%,#333391 70% 75.7% ,#e91388  100% 57.38%);"
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
      
      fontSize:'16px'
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
      <CardActionArea  className={classes.root}>
      <CardContent>   
      <div className={classes.image}>
      <img src="images/features/svg-7.svg" alt="title" width="150px" height="150px"/>
      </div>
        <Typography variant="h6"className={classes.paragraph} >{FeatureHeading}</Typography>
          <Typography className={classes.paragraph}>
           {FeatureInfo}
          </Typography>
          </CardContent>
          </CardActionArea>
    </Paper>
</div>



      
      
      </IconContext.Provider>
    </>
  );
}

export default FeatureSection