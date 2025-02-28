import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

import Offers from "./features/offers/Offers";
import AppDownload from "./AppDownload";
import Collections from "./Collections";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="mx-auto mt-8 w-5/6 ">
      <Navbar />
      <Outlet />
      <Offers/>
      <AppDownload/>
      <Collections/>
      <Footer/>
     
    </div>
  );
};

export default App;
