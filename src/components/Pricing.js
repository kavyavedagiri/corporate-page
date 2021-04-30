import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      minWidth:880,
      backgroundColor:"#F2F2F2",
       color:"#1c2237",
       minHeight:350,
      
      borderRadius:"20px",
      padding:"40px",
        [theme.breakpoints.up('xl')]: {
          maxWidth: 1020,
          minWidth:1000,
          },
        [theme.breakpoints.down('lg')]: {
          maxWidth: 850,
          minWidth:820,
          },
        [theme.breakpoints.down('md')]: {
          padding:"20px",
          maxWidth: 650,
          minWidth:550,
        },
        [theme.breakpoints.down('sm')]: {
          padding:"20px",
          maxWidth: 350,
          minWidth:290,
        },
      
      },

    media: {
      height: 0,
      paddingTop: '50%', // 16:9
    },
    expand: {
      color:"#000",
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      color:"#000000",
      transform: 'rotate(180deg)',
    },
    subParagraph:{
      position:"relative",
      padding:"10px",
      marginBottom:"10px",
      width:"70%",
      color:"#B3B3B3",

      [theme.breakpoints.down('md')]: {
      
       width:"100%",
     
      },
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
    fontSize:"30px",
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
      [theme.breakpoints.down('md')]: {
    
        margin:"15px 10px",
       
        },
    },
    adsTag:{
       backgroundColor:'#009245',
    
      padding:"10px 10px",
      width:"70px",
      textAlign:"center",
      borderRadius:"50px",
      color:"#ffffff",
      fontWeight:"bold",
      boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
      [theme.breakpoints.down('md')]: {
    
        margin:"15px 10px",
       
        },
    }
  
  }));
function Pricing({
    title_c,
    Subtitle_c,
   
    paragraph1_c,
    subParagraph1_c,
    subParagraph1,
    subParagraph2,
    subParagraph3,
    subParagraph4,
    subParagraph5,
    tag,
    special

}) {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <IconContext.Provider value={{ color: '#000000', size: 64 }}>

      <div  style={{ margin:"10px"}}>
               
               
             <Card  data-aos="zoom-in-down" className={special?classes.rootSpecial:classes.root} elevation={9} >
              
               <div  className={classes.priceHeader} style={{display:'flex',justifyContent:'space-between',flexWrap:"wrap"}}>
                 <div style={{display:'flex',flexWrap:"wrap"}}>
                 <div className={classes.priceHeading} >{title_c}</div>
                 <div className={classes.priceSubHeading} >{Subtitle_c}</div>
                </div>
                 <div style={{display:'flex',flexWrap:"wrap"}}>
                 <div className={classes.freeTag}>Free</div>
                 <div className={classes.adsTag}>Ads</div>
                 </div>
               </div>
               <div>
               
                 <div>

                 </div>
               </div>
                 
                 <div className={classes.subParagraph}>
                 <ul style={{listStyleType:"none"}}>
                    <li> {subParagraph1}</li>
                    <li>{subParagraph2} </li>
                    <li>{subParagraph3}</li>
                    <li>{subParagraph4}</li>
                     <li>{subParagraph5}</li>
                  </ul>  
                 
                 
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
export default Pricing;