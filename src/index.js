/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDom from "react-dom";
import App from "./app";
import "./index.css";

const RocketShip = () => {
 return (
  <main>
   <App />
  </main>
 );
};
ReactDom.render(<RocketShip />, document.getElementById("root"));
