import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
}

}))

export default function Info() {
    const classes = useStyles();


    return (
        <div className={classes.title}>
         <h1>About NextHome Website</h1>   
         <p></p>
        </div>
    )
}