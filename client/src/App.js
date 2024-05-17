import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import OurDrinks from "./OurDrinks";
import WelcomeLounge from "./WelcomeLounge";
import Barman from "./Barman";
import Subscription from "./Subscribtion";
import Reviews from "./Reviews";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Home />
      <OurDrinks />
      <WelcomeLounge />
      <Barman />
      <Reviews />
      <Subscription />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
