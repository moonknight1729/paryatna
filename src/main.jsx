import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Flights from "./services/flights/Flights";
import Hotels from "./services/hotels/Hotels";
import HolidayPackages from "./services/holiday-package/HolidayPackages";
import Trains from "./services/trains/Trains";
import Cabs from "./services/cabs/Cabs";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="flights" element={<Flights />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="trains" element={<Trains />} />
        <Route path="holiday-packages" element={<HolidayPackages />} />
        <Route path="cabs" element={<Cabs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
