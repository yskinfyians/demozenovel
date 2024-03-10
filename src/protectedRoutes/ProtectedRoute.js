import React from "react";
import {
  createHashRouter, // Change import to use createHashRouter
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { token } from "../redux/LoginReducer";
import { useSelector } from "react-redux";
import { loginSelector } from "../redux/LoginReducer";
import Navbar from "../Navbar/Navbar";

const ProtectedRoute = () => {
  const selector = useSelector(loginSelector);

  let isAuth = selector.loggedIn;
  console.log("iAuth", isAuth);

  if (isAuth) {
    return (
      <>
        <Navbar />
        {/* <Outlet /> */}
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
