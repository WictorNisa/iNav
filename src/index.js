import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Services from "./routes/Services";
import Ref from "./routes/Ref";
import reportWebVitals from "./reportWebVitals";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ScopedCssBaseline>
            <App />
          </ScopedCssBaseline>
        }
      />
      <Route path="services" element={<Services />} />
      <Route path="refrences" element={<Ref />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
