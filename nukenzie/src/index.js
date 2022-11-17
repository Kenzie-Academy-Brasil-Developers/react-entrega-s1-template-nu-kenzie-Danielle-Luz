import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Login />);
