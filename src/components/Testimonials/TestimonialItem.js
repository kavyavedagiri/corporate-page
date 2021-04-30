import React from 'react'

import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
      CardContent,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 280,
  
      minWidth: 120,
      minHeight:350,
      maxHeight:400,
      borderRadius: "20px",
      elevation:9,
      alignItems:"center",
     
      backgroundColor:"#F2F2F2",
      boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
     
    },
    media: {
      height: 0,
      paddingTop: '58.25%', // 16:9
  
    },
    dividerFullWidth: {
      
      backgroundColor:" rgb(240 9 81)",
      width: "80%",
      margin: `5px 10px 15px 60px;`,
      [theme.breakpoints.down('md')]: {
      margin: `5px 0px 15px 0px;`,
      width: "100%",
    },
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
    paragraph_feedback:{
      margin:10,
      
      color:"#000",
      fontStyle: 'italic',
      fontSize:'16px'
    },
    paragraph_name:{
        margin:10,
        
        color:"#000",
        
        fontSize:'12px',
        justifyContent:"center",
        textAlign:"center"
      },
      paragraph_designation:{
        margin:10,
        
        color:"#000",
        
        fontSize:'12px',
        justifyContent:"center",
        textAlign:"center"
      },
   
  }));
function TestimonialItem() {
    const classes = useStyles();
    return (
        <div>
            <div style={{margin:"10px"}} >
        <Paper className={classes.root}  >
     
      <CardContent className={classes.paragraph_feedback}>   
   
      <ImQuotesLeft/>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </div>
          <ImQuotesRight/>
            </CardContent>
          <CardContent className={classes.paragraph_name}>   
          <div>Mark Woodbury</div>
          <div className={classes.paragraph_designation}>Student</div>
          </CardContent>
        
         
    
    </Paper>
    </div>
        </div>
    )
}

export default TestimonialItem
