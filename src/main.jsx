import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Flights from "./features/flights/Flights";
import Hotels from "./features/hotels/Hotels";
import HolidayPackages from "./features/holiday-package/HolidayPackages";
import Trains from "./features/trains/Trains";
import Cabs from "./features/cabs/Cabs";
import "./index.css";
import Admin from "./Admin";
import Login from "./features/authentcation/Login";
import PrivateRoute from "./PrivateRoute";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<App />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/user" element={<App />} />
      </Route>


    </Routes>
  </BrowserRouter>
);
