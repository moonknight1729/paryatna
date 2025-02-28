import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

//   if (!login) <Navigate to="/login" />;
  return <Outlet />;

};

export default PrivateRoute;
