import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 490,
      minWidth:480,
      backgroundColor:"#F2F2F2",
       color:"#1c2237",
      minHeight:300,
      
      borderRadius:"20px",
      padding:"20px",
      [theme.breakpoints.down('sm')]: {
      maxWidth: 310,
      minWidth:290,
      
     
      },},
      rootSpecial: {
        maxWidth: 490,
        minWidth:480,
        backgroundColor:"#F2F2F2",
        backgroundImage: "linear-gradient(45deg,#02A4DB 10% 12.7%,#333391 70% 75.7% ,#e91388  100% 57.38%)",
         color:"#1c2237",
        minHeight:300,
       
        borderRadius:"20px",
        padding:"20px",
        [theme.breakpoints.down('sm')]: {
        maxWidth: 310,
        minWidth:290,
       
       } },

      
    
    media: {
      height: 0,
      paddingTop: '50%', // 16:9
    },
    expand: {
      color:"#FFFFFF",
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      color:"#FFFFFF",
      transform: 'rotate(180deg)',
    },
    subParagraph:{
      position:"relative",
      padding:"10px",
      width:"70%"
    },
    button:{
      justifyContent:'center',
     paddingTop:"1px"
    },
    priceHeader:{
      margin:10,
    },

    priceHeading:{
    fontWeight:"bold",
    fontSize:"30px"
    },
    freeTag:{
       backgroundColor:'#003399',
      color:"#ffffff",
      padding:"10px 10px",
      width:"80px",
      textAlign:"center",
      borderRadius:"50px",
      marginRight:"10px",
      fontWeight:"bold",
    },
    adsTag:{
       backgroundColor:'#009245',
    
      padding:"10px 10px",
      width:"50px",
      textAlign:"center",
      borderRadius:"50px",
      color:"#ffffff",
      fontWeight:"bold",
    }
  
  }));
function PricingSpecial({
    title_c,
    subheader_c,
    subheader2_c,
    paragraph1_c,
    subParagraph1_c,
    subParagraph1,
    tag,
    special

}) {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>

      <div  style={{ margin:"10px"}}>
               
               
             <Card  data-aos="zoom-in-down" className={classes.rootSpecial} elevation={9} >
              
               <div  className={classes.priceHeader} style={{display:'flex',justifyContent:'space-between'}}>
                 <div className={classes.priceHeading} >{title_c}</div>
                 <div style={{display:'flex'}}>
                 <div className={classes.freeTag}>Free</div>
                 <div className={classes.adsTag}>Ads</div>
                 </div>
               </div>
               <div>
               
                 <div>

                 </div>
               </div>
                 
                 <div className={classes.subParagraph}>
                 {subParagraph1} 
                 
                 </div>
                 <Button  buttonColor="primary" >
                      Sign Up
                  </Button> 

                  

               <CardActions disableSpacing>
                 <IconButton
                 className={clsx(classes.expand, {
                   [classes.expandOpen]: expanded,
                 })}
                 onClick={handleExpandClick}
                 aria-expanded={expanded}
                 aria-label="show more"
                 >
                 <ExpandMoreIcon />
                </IconButton>
               </CardActions>
             <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent>
                 <Typography paragraph>{paragraph1_c}</Typography>
                 <Typography paragraph>
                  {subParagraph1_c}
                 </Typography>
               </CardContent>
             </Collapse>
           </Card>
       </div>
       
    </IconContext.Provider>
  );
}
export default PricingSpecial;