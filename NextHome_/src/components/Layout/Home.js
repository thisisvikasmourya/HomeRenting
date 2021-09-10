import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RentalCard from '../Rentals/RentalCard';
// import { shadows } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  indet:{
    backgroundColor:theme.palette.text.disabled,
    borderRadius:10,
    padding:1,
  },
  input:{
    color:theme.palette.text.primary
  },
  title:{
   fontWeight:'bold',
  },
  
  maini:{
  //  backgroundColor:'skyblue',
   margin:0,
  
  }
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
    
      <main className={classes.maini}>
        {/* Hero unit */}
        <div className={classes.heroContent} boxShadow={3} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom className={classes.title}>
              NextHome
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.indet}>
      <InputBase
        className={classes.input}
        placeholder="Search Your NextHome"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
            </Typography>
          </Container>
        </div>
       <RentalCard/> 
      </main>
    </React.Fragment>
  );
}