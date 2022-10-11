import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotificationList from "./3차시-1/NotificationList";
import Accommodate from "./3차시-2/Accommodate";
import ConfirmButton from "./4차시/ConfirmButton";
import LandingPage from "./4차시/LandingPage";
import AttendanceBook from "./5차시/AttendanceBook";
import SignUp from "./5차시/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <NotificationList />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <Accommodate />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <ConfirmButton />
  // </React.StrictMode>
  
  // <React.StrictMode>
  //   <LandingPage />
  // </React.StrictMode>

  // <React.StrictMode>
  //   <AttendanceBook />
  // </React.StrictMode>

  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
 
);

reportWebVitals();
