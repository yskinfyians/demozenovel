import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import {
  createHashRouter, // Change import to use createHashRouter
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import { token } from "./redux/LoginReducer";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import Navbar from "./Navbar/Navbar";
import { loginSelector } from "./redux/LoginReducer";
import Home from "./Home/Home";
import TrackerUI from "./ProjctTrack/TrackerUI";
import ViewDesign from "./ViewTracker/ViewDesign";
// import Navbar from "./Navbar/Navbar";

function App() {
  const selector = useSelector(loginSelector);

  // const router = createHashRouter([
  //   // Change to createHashRouter
  //   {
  //     path: "/",
  //     element: <LoginPage />,
  //     children: [
  //       // { index: true, element: <Navbar /> },
  //       {
  //         index: true,
  //         element: selector.token !== "" ? <Navbar /> : <LoginPage />,
  //       },

  //       // { path: "viewTracker", element: <ViewDesign /> },
  //       // { path: "MapConfiguration", element: <AddMapConfiguration /> },
  //     ],
  //   },
  // ]);

  console.log(selector.token);
  const loggedIn = selector.loggedIn;

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={loggedIn ? <Navigate to="/home" /> : <LoginPage />}
        />

        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="home" element={<Home />} />
          <Route exact path="projectTracking" element={<TrackerUI />} />
          <Route exact path="viewTracker" element={<ViewDesign />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
