import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: 'skyblue',
        padding: theme.spacing(6),
        color:'primary',
      },
    }));
    


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          NextHome
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



export default function Footer() {
    const classes = useStyles();
    return (
        <div component="main">
          <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          NextHome.com
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
    <Copyright/>
      </footer>  
        </div>
    )
}

  