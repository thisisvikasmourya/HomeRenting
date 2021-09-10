import React from "react";
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
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import SignIn from "../login/SignIn";
import SignUp from "../register/SignUp";
import Footer from "./Footer";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RentalForm from "../Rentals/RentalForm";
import RentalDetail from "../Rentals/RentalDetail";
import RentalManage from "../Rentals/RentalManage";
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ContactUs from "./ContactUs";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import Info from "./Info";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow:1,
    backgroundColor:'skyblue'
  
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 1,
    
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up("sm")]: {
    //   display: "none"
    // }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:60,
    color:'text.secondary',
    marginLeft:10,
    paddingLeft:20,
    borderRadius:10,
    paddingBottom:10,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  btn:{
    float:"left"
  
  },
    title:{
      flexGrow:1,
    },
  
    appBar:{
      backgroundColor:'skyblue'
    }

}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [Open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider  />
      <List>
        {[ "Home","Search","RentalForm","RentalManage","SignIn","SignUp","ContactUs","Info"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text}>
            <ListItemIcon>
              {index  === 0 && <HomeIcon/>}
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
          <NotificationsIcon />

          <Button className={classes.btn} variant="h6" href="/SignIn"  color="inherit">Login</Button>

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
          {/* <Hidden mdDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden> */}
        </nav>

        <main className={classes.content}>
        
          <div className={classes.toolbar} />

          <Switch>
            {/* <Route path="/" render={() => <div> Page inbox</div>} /> */}
            <Route Redirect path="/Home"  component={Home} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/RentalForm" component={RentalForm} />
            <Route path="/SignIn"   component={SignIn} />
          
            <Route path="/SignUp"  component={SignUp} />
            <Route path="/ContactUs"  component={ContactUs} />
            <Route path="/Info"  component={Info} />
            
            <Route path="/RentalDetail"  component={RentalDetail} />
            <Route path="/RentalManage"  component={RentalManage} />

          </Switch>
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
