import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import NativeSelect from '@material-ui/core/NativeSelect';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
},
input:{
    color:theme.palette.text.primary
  },

search:{
  height:650,
}
,
slider:{
  width:'200px'
}


}));

function valueLabelFormat(value) {
    const [coefficient, exponent] = value
      .toExponential()
      .split('e')
      .map((item) => Number(item));
    return `${Math.round(coefficient)}e^${exponent}`;
  }


export default function Search() {
const classes = useStyles();

   
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div className={classes.search}>
        <div className={classes.title}>
            <h1>Search with filter </h1>
            <h5>Cost,Apartment Size View </h5>

            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.indet}> 
      <NativeSelect
        //   value={state.name}
        //   onChange={handleChange}
          inputProps={{
            name: 'name',
            id: 'name-native-disabled',
          }}
        >
          <option value="">None</option>
          <optgroup label="Size">
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
          </optgroup>
        </NativeSelect> &nbsp;
      <NativeSelect
        //   value={state.name}
        //   onChange={handleChange}
          inputProps={{
            name: 'name',
            id: 'name-native-disabled',
          }}
        >
          <option value="">None</option>
          <optgroup label="Category">
            <option value="hai">Apartment</option>
            <option value="olivier">House</option>
            <option value="kevin">Flat</option>
          </optgroup>
        </NativeSelect>
        &nbsp;&nbsp;&nbsp;&nbsp;

        
      <InputBase
        className={classes.input}
        placeholder="Search Your NextHome"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>

 
            </Typography>

            <Typography id="non-linear-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider className={classes.slider}
        value={value}
        min={0}
        step={0.1}
        max={6}
        scale={(x) => x ** 10}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />

        </div>
        </div>
    )
}
