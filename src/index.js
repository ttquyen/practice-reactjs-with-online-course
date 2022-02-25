import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import MovieTable from "./components/movieTable";
ReactDOM.render(
  <React.StrictMode>
    <MovieTable />
  </React.StrictMode>,
  document.getElementById("root")
);
