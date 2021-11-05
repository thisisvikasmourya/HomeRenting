import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
// import {  } from '@material-ui/styles';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

  contactf:{
    marginTop:100,
    marginBottom:100,
  }
  
    }));
  




export default function ContactUs() {
  const classes = useStyles();

  


    return (
        <div className={classes.contactf}> 
       
        <Grid>
          <Card style={{ maxWidth: 400, padding: "20px 5px", margin: "0 auto" }} className={classes.controot}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
            </Typography> 
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the form and our team will get back to you within 24 hours.
            </Typography> 
              <form>
                <Grid container spacing={1}>
                  
                  <Grid item xs={12}>
                    <TextField type="name" placeholder="Enter name" label="Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                  </Grid>
  
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    )
}
