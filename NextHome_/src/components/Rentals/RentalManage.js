import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Rentalpost from './Rentalpost';


const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
},
manage:{
    height:'auto',
},
Box:{

},


}));


export default function RentalManage() {

    const rentals = useSelector((state) => state.rentals);

    const classes = useStyles();

    return (
        <div className={classes.manage}>
        <div className={classes.title}>
            <h1>Your rental Property</h1>
            {/* <h1>Nothing to Show</h1> */}
<Container>
        <Grid container spacing={4} className={classes.card}  >
          {rentals.map((rental) => (
            <Grid key={rental._id} className={classes.box} item  md={4} >
              <Rentalpost rental={rental}  />
              </Grid>
          ))};
        </Grid>
      </Container>



        </div>
        </div>
    )
}
