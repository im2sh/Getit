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
import Calculator from "./6차시-1/Calculator";
import ProfileCard from "./6차시-2/ProfileCard";
import DarkOrLight from "./7차시/DarkOrLight";


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

  // <React.StrictMode>
  //   <SignUp />
  // </React.StrictMode>

  // <React.StrictMode>
  // <Calculator />
  // </React.StrictMode>

  
  // <React.StrictMode>
  // <ProfileCard />
  // </React.StrictMode>

  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);


reportWebVitals();
