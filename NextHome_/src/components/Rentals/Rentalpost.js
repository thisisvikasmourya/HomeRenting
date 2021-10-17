import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { ButtonBase } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },


  }));

  
  
const  Rentalpost= ({ rental,setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
const openRental =()=> history.push(`/rentals/${rental._id}`)
    
    
    return (
        <React.Fragment>
            <CssBaseline />

            <Container maxWidth="lg">
          <Grid >
              <Grid item xs={12}  >

            <Card className={classes.card} >
              <a
              // className={classes.cardActions}
              onClick={openRental}
            
              >

      <CardMedia className={classes.media} image={rental.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={rental.title} />
      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.creator}</Typography> */}
        <Typography variant="body2">{moment(rental.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(rental._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="p">{rental.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{rental.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{rental.description}</Typography>

          <Typography variant="body2" color="textSecondary" component="p">{rental.address}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">{rental.rentaltype}</Typography>
                 
      </CardContent>
              </a>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like  </Button>
        <Button size="small" color="primary" > Buy</Button>
      </CardActions>
    </Card>

    </Grid>
            
          </Grid>
          
       

        </Container>


          

        </React.Fragment>
    )
}

export default Rentalpost;
