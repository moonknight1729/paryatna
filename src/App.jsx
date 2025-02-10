import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import FlightSearch from './services/flights/FlightSearch'
import Offers from "./Offers";
import AppDownload from "./AppDownload";
import Collections from "./Collections";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="mx-auto mt-8 w-5/6 ">
      <Navbar />
      <FlightSearch/>
      <Offers/>
      <AppDownload/>
      <Collections/>
      <Footer/>
      <Outlet />
    </div>
  );
};

export default App;
