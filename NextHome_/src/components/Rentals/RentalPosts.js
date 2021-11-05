import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';


import Rentalpost  from './Rentalpost';

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
  },
  title:{
   fontWeight:'bold',
   textAlign:'center',
   color:"#fff"
  },
  
  mainContainer: {
    borderRadius: 2,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  card:{
    marginTop:20,
    marginBottom:30,
  },
  Button:{
    backgroundColor:'#fff',
    width:'275px'
  },
    header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },

}));


const RentalPosts = ({ setCurrentId }) => {
  const { rentals, isLoading } = useSelector((state) => state.rentals);
  const classes = useStyles();
  const dispatch = useDispatch()

  if (!rentals?.length && !isLoading) return 'No posts';

  return (
    <div>
      
     <h1> hello vikas</h1>
         isLoading ? <CircularProgress /> : (

      <Grid container spacing={4} className={classes.card} >
          {rentals?.map((rental) => (
            <Grid key={rental._id}  container item  md={3} >
              <Rentalpost rentals={rentals} setCurrentId = {setCurrentId} />
              </Grid>
            
          ))};
        </Grid>
         );
    </div>
  );
};

export default RentalPosts;
