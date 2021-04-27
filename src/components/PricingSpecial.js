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
 
      rootSpecial: {
        maxWidth: 490,
        minWidth:480,
        backgroundColor:"#F2F2F2",
        backgroundImage: "linear-gradient(45deg,#02A4DB 10% 12.7%,#333391 70% 75.7% ,#e91388  100% 57.38%)",
         color:"#ffffff",
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
    
    priceSubHeading:{
      fontWeight:"bold",
      fontSize:"22px",
      paddingTop:"8px"
      },
    freeTag:{
       backgroundColor:'#003399',
      color:"#ffffff",
      padding:"10px 10px",
      width:"100px",
      textAlign:"center",
      borderRadius:"50px",
      marginRight:"10px",
      fontWeight:"bold",
      boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
    },
    
  
  }));
function PricingSpecial({
    title_c,
    price,
    Subtitle_c,
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
               <div style={{display:'flex'}}>
                 <div className={classes.priceHeading} >{title_c}</div>
                 <div className={classes.priceSubHeading} >{Subtitle_c}</div>
                </div>
                 <div style={{display:'flex'}}>
                 <div className={classes.freeTag}>{price}</div>
             
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