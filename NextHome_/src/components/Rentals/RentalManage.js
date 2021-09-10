import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
}



}));


export default function RentalManage() {

    const classes = useStyles();

    return (
        <div className={classes.title}>
            <h1>You have not create any rental House</h1>
            <h1>Nothing to Show</h1>
        </div>
    )
}
