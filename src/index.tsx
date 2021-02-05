import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./DataLayer";
import { initialState, reducer } from "./reducer";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
