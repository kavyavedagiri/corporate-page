import React from 'react';
import './ContactUs.css';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      
    }
  },
    paper: {
      marginTop: theme.spacing(12),
     
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     
    },
    avatar: {
      margin: theme.spacing(4),
      backgroundColor: "#003399",
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      margin: theme.spacing(8, 0, 2),
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
      backgroundColor: "#003399",
      borderRadius:"30px",
      color:"#fff",
      '&:hover': {
        backgroundColor: "#fff",
        color:"#003399",
      }

    },
   
  }));
  
function ContactUs() {
  const classes = useStyles();
   
  return (
    <div className='ContactUs-container' id="contactusPg"> 
      <section className='ContactUs-subscription'>
      <Container component="main" maxWidth="sm">
        
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MailOutlineIcon />
          </Avatar>
          <div class="headingC">
            Contact Us
          </div>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="fname"
                  // name="firstName"
                  variant="standard"
                  required
                  fullWidth
                  // id="firstName"
                  label="First Name"
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  // id="lastName"
                  label="Last Name"
                  // name="lastName"
                  // autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  // id="email"
                  label="Email Address"
                  // name="email"
                  // autoComplete="email"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  
                  fullWidth
                  // name="phoneNumber"
                  label="Phone Number"
                  
                  // id="phoneNumber"
                  // autoComplete="phone-number"
                />
              </Grid>
              
          
                
                  <Grid item xs={12}>
                  <TextField
                    // id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    fullWidth
                    rows={4}
                    variant="standard"
                    /></Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              className={classes.submit}
            >
              Contact Us
            </Button>
          </form>
        </div>
        <Box mt={12}>
     
        </Box>
      </Container>
        
      </section>
    </div>
  );
}

export default ContactUs;