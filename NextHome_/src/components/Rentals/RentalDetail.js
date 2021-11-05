import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { getrental } from '../../actions/rentals';
import RentalAsset from './RentalAsset';
// import useStyles from './styles';
const useStyles = makeStyles((theme) => ({


    media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },

}));


const RentalDetail = () => {
  const { rental, rentals, isLoading } = useSelector((state) => state.rentals);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getrental(id));
  }, [id]);

  // useEffect(() => {
  //   if (rental) {
  //     dispatch(getrentalsBySearch({ search: 'none', tags: rental?.tags.join(',') }));
  //   }
  // }, [rental]);

  if (!rental) return null;

  const openrental = (_id) => history.push(`/rentals/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  // const recommendedrentals = rentals.filter(({ _id }) => _id !== rental._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{rental.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{rental.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{rental.description}</Typography>
          <Typography gutterBottom variant="body1" component="p">{rental.address}</Typography>
          <Typography gutterBottom variant="body1" component="p">{rental.rentaltype}</Typography>
          <Typography gutterBottom variant="body1" component="p">Contact : 12345678909</Typography>
          <Typography gutterBottom variant="body1" component="p">Buy / Rent</Typography>
          
          <Typography variant="h6">Feature :
          
          <RentalAsset/>
           </Typography>

          <Typography variant="body1">{moment(rental.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={rental.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={rental.title} />
        </div>
      </div>
      {/* {!!recommendedrentals.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedrentals}>
            {recommendedrentals.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openrental(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )} */}
    </Paper>
  );
};

export default RentalDetail
