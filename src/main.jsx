import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ToggleColorMode from './ToggleColorMode';
import { Provider } from 'react-redux'
import { store } from "./Redux/Store";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorMode>
    </Provider>
  // </React.StrictMode>
);
