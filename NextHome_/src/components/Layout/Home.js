import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Rentalpost from '../Rentals/Rentalpost';
// import { shadows } from '@material-ui/system';

import {CircularProgress, Grid } from '@material-ui/core';

import { useSelector } from 'react-redux';
import Info from './Info';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(15, 0, 0),
    height:'400px',
    backgroundColor:'#14274E',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  indet:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:1,
    // padding:'100px'

  },
  input:{
    color:'#000',
    backgroundColor:'#fff',
    // padding:'100px'
  },
  title:{
   fontWeight:'bold',
   textAlign:'center',
   color:"#fff"
  },
  
  container:{
    borderRadius: 5,
    margin: '30px 0',
    // display: 'flexbox',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',

  }
}));


 const Album = ({setCurrentId}) => {
  const classes = useStyles();
  const rentals = useSelector((state) => state.rentals);
  console.log(rentals);


  return (
    <React.Fragment>
      <CssBaseline />
    
      <main className={classes.maini}>
        {/* Hero unit */}
        <div className={classes.heroContent} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="left" color="Primary" gutterBottom className={classes.title}>
            NextHome
            </Typography>
            <Typography component="h3" variant="h6" align="left" color="Primary" gutterBottom className={classes.title}>
            Everything You Need. All Right Here.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.indet}>
      <InputBase
        className={classes.input}
        placeholder="Search Your NextHome"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
            </Typography>
          </Container>
        </div>

        <Grid className={classes.container}  >
          {rentals.map((rental) => (
            <Grid key={rental._id} >
              <Rentalpost rental={rental} setCurrentId = {setCurrentId} />
              </Grid>
          ))};
        </Grid>
      
      </main>
    </React.Fragment>
  )};

export default Album;