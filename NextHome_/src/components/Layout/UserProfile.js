import React , {useState} from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  
    profile: {
      display: 'flex',
      // justifyContent: 'space-between',
      width: '160px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    full:{
        height:400
    }
    
}));




export default function UserProfile() {
      const classes = useStyles();

      const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <div className={classes.full}>
        <h1>Profile </h1>
             <Avatar className={classes.purple }  alt={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
             <div className={classes.userName} variant="h6" component="p">{user.result.name}</div>
             <div variant="h6" component="p">{user.result.email}</div>
 
        </div>
    )
}
