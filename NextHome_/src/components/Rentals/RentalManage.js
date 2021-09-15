import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Grid } from '@material-ui/core';
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

        <Grid className={classes.container}   alignItems="stretch"   >
          {rentals.map((rental) => (
            <Grid key={rental._id} className={classes.box} item  >
              <Rentalpost rental={rental}  />
              </Grid>
          ))};
        </Grid>
      



        </div>
        </div>
    )
}
