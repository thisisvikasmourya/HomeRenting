import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import './RentalForm.css'


export default function RentalForm() {
  return (
    <React.Fragment>
        <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        Create Rental
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Description"
            name="Description"
            label="Description"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          label="Category"
          inputProps={{
            name: 'Category',
            id: 'age-native-simple',
          }}
        >
          <optgroup label="Category">
          <option aria-label="None" value="" />
          <option value={10}>Apartment</option>
          <option value={20}>home</option>
          <option value={30}>Flat</option>
          </optgroup>
        </Select>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Shared"
          />
          <Button  color="primary" backgroundColor="primary" >Submit</Button>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}

