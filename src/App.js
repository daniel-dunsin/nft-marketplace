import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import CreateAndSell from "./components/CreateAndSell/CreateAndSell";
import Choice from "./components/Choice/Choice";
import Marketplace from "./components/Marketplace/Marketplace";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from './components/Footer/Footer';
const theme = {
  colors: {
    mainDarkBlue: '#232835',
    mainLightBlue: '#2d69fd',
    textColor: '#a6a6a6',
  },
  screens: {
    mobile: '700px',
    tablet: '1050px',
    galaxyFold:'300px'
  }
}
function App() {
  return <ThemeProvider theme={theme}>
    <Home />
    <Sponsors />
    <CreateAndSell />
    <Choice />
    <Marketplace />
    <Subscribe />
    <Footer />
  </ThemeProvider>
}

export default App;
