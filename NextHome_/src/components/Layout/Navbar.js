import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter,Redirect} from "react-router-dom";
import Search from "./Search";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ContactUs from "./ContactUs";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import Info from "./Info";
import Home from "./Home";
import Footer from "./Footer";
import RentalF from "../Rentals/RentalF";
import RentalManage from "../Rentals/RentalManage";
import { useDispatch } from "react-redux";
import {getRentals} from '../../actions/rentals'
import { Avatar } from "@material-ui/core";
import Auth from "../Auth/Auth";
import { useHistory, useLocation } from 'react-router-dom';
// import RentalPosts from "../Rentals/RentalPosts";
import RentalDetail from "../Rentals/RentalDetail";
import RentalForm from "../Rentals/RentalForm";
import CManage from "../Rentals/Manage";
import decode from "jwt-decode";
import UserProfile from "./UserProfile";
import * as actionType from '../../constants/actionTypes'
import PaintService from "../Rentals/RentalService/PaintService";
import FurnService from "../Rentals/RentalService/FurnService";
import CleanService from "../Rentals/RentalService/CleanService";
import PacketService from "../Rentals/RentalService/PacketService";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow:1,
    backgroundColor:'#F0E5CF',
    // backgroundImage:'url('


  
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 1,
      color:'#fff',

    
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up("sm")]: {
    //   display: "none"
    color:'#fff'
    // }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:60,
    // backgroundColor:'#14274E',
    marginLeft:10,
    paddingLeft:20,
    borderRadius:10,
    paddingBottom:10,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0)
  },
    title:{
      flexGrow:1,
    },
  
    appBar:{
      backgroundColor:'#14274E',
      
    },
    
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
    
}));




function ResponsiveDrawer(props) {

  
  const dispatch = useDispatch();
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [Open, setOpen] = React.useState(false);
  let history = useHistory();


  const handleDrawerToggle = () => {
    setOpen(!Open);
  };

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  
  useEffect(() => {
    const token = user?.token;

    if(token){
  const decodedToken = decode(token);

  if(decodedToken.exp * 1000 < new Date().getTime()) logout();
}

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);


 const logout = () => {
    dispatch({ type : actionType.LOGOUT});  

    setUser(null);
  };
  
//  const [currentId,setCurrentId] = useEffect(null)

  useEffect(()=>{
    dispatch(getRentals());
  },[dispatch]);

  

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider  />
      <List className={classes.nav}>
        {[ "Home","Search","CreateRental","Manage","ContactUs","Info"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text}>
            <ListItemIcon>
              {index  === 0 && <HomeIcon />}
              {index  === 1 && <SearchIcon/>}
              {index  === 2 && <AddCircleOutlineIcon/>}
              {index  === 3 && <FormatAlignCenterIcon/>}
              {index  === 4 && <ExitToAppIcon/>}
              {index  === 5 && <LockOpenIcon/>}
              {index  === 6 && <ContactSupportIcon/>}
              {index  === 7 && <InfoIcon/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NextHome 
          </Typography>

          {/* <Typography >
         <NotificationsIcon />
         </Typography> */}
         <div className={classes.profile}>
            {user ? (
                <div className={classes.profile}>
                  <Button href="/UserProfile"> 
                <Avatar className={classes.purple } alt={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar> </Button>
                  { /* <div className={classes.userName} variant="h6" component="p">{user.result.name}</div>*/}
                  &nbsp;&nbsp;
                  <Button  variant="outlined" size='small' color="inherit"  onClick={logout} >Logout</Button>
                  </div>
            ):(
               <Button  variant="outlined" size='small' href="/auth"  color="inherit">Sign In</Button> 

            )}




          </div>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="persistant"
              anchor={theme.direction === "rtl" ? "right" : "top"}
              open={Open}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}

            </Drawer>
           
          </Hidden>
         
        </nav>

        <main className={classes.content}>
          
        
          <div className={classes.toolbar} />

          <Switch>
            
          <Route path="/" exact component={() => <Redirect to="/rentals" />} />
          <Route path="/rentals" exact component={Home} />
      
          <Route path="/rentals/:id" exact component={RentalDetail} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/rentals" />)} />
            <Route path="/Home"  component={Home} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/CreateRental" component={() => (!user ? <Auth /> : <Redirect to="/RentalForm" />)} /> 
            <Route path="/auth"  component={Auth} />
            <Route path="/ContactUs"  component={ContactUs} />
            <Route path="/Info"  component={Info} />
            {/* <Route path="/RentalDetail"  component={RentalDetail} /> */}
            <Route  path="/RentalForm"  component={RentalForm} />
             <Route path="/Manage"  component={() => (!user ? <Auth /> : <Redirect to="/CManage" />)} />
             <Route path="/CManage"  component={RentalManage} />
              <Route path="UserProfile" component={UserProfile} />
      <Route path="/paintService" component={PaintService} />
      <Route path="/furnService" component={FurnService} />
      <Route path="/cleanService" component={CleanService} />
      <Route path="/ElectricalService" component={PacketService} />
          </Switch>
          {/* <ContactUs/> */}
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};



export default ResponsiveDrawer;
