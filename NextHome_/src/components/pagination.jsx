import React from 'react';
import {Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    ul: {
        justifyContent:'space-around',
    }
}));


const Paginate = ()=>{
    const classes = useStyles();


    return (
        <Pagination 
        classes={{ul:classes.ul}}
        count={5}
        page={1}
        variant="outlined"
        color="primary"
        renderitems = {(item)=>(
            <PaginationItem {...item} component={Link} to={`/rentals?page=${1}`}/>
        )}

        />
    )


}

export default Paginate;