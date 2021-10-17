import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RentalForm from './RentalForm';
import { useDispatch } from 'react-redux';
import { getRentals } from '../../actions/rentals';
import RentalManage from './RentalManage';

const useStyles = makeStyles((theme) => ({
title:{
    textAlign:'center',
}

}))

// {currentId,setCurrentId }

export default function CManage() {
    // const [setCurrentId] = useState(null); 
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getRentals());
      }, [ dispatch]);
    


    return (
       <RentalManage  />
    )
}

// currentId ={currentId} setCurrentId={setCurrentId}