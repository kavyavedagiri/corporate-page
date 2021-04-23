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
      maxWidth: 350,
      minWidth: 290,
      minHeight:300,
      padding:9,
      justifyContent:'center',
      alignItems:"center",
      textAlign:"center",
      backgroundColor:"#dce0eb"
    },
    media: {
      height: 0,
      paddingTop: '58.25%', // 16:9
      justifyContent:'center',
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
      textAlign:"center",
      color:"#1c2237",
      fontStyle: 'italic',
      fontSize:'12px'
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
       
    <div data-aos="zoom-in-down" style={{ margin:"10px"}}>
               
        
      <Paper className={classes.root} elevation={6} >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="150px" height="150px"/>
        <Typography variant="h6" >{FeatureHeading}</Typography>
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