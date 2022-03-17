import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import enviromentService from "./services/enviroment";

enviromentService.getEnv();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
