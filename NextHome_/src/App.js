
// import './App.css';
import React from 'react';
import Navbar from './components/Layout/Navbar'
// import { MuiThemeProvider } from '@material-ui/core';

// import CssBaseline from "@material-ui/core/CssBaseline";
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// // import {useSa}

function App() {
  // const [light, setLight] = React.useState(true);

  // const themeLight = createTheme()({
  //   palette: {
  //     background: {
  //       default: "#e4f0e2"
  //     }
  //   }  
  // });
  
  // const themeDark = createTheme()({
  //   palette: {
  //     background: {
  //       default: "#222222"
  //     },
  //     text: {
  //       primary: "#ffffff"
  //     }
  //   }
  // });
  


  return (
    <div className="App">
{/* <ThemeProvider theme={light ? themeLight : themeDark}
>
<CssBaseline />
      <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
<Navbar/>
{/* </ThemeProvider> */}
    </div>
  );
}

export default App;
