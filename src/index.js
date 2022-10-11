import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotificationList from "./3차시-1/NotificationList";
import Accommodate from "./3차시-2/Accommodate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
  // <React.StrictMode>
  //   <Accommodate />
  // </React.StrictMode>
);

reportWebVitals();
