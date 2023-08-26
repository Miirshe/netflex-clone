import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { My_list_context } from "./reducers/My_list_context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <My_list_context>
          <App />
        </My_list_context>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>
);
