import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./components/Form";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Form total={600} />);
