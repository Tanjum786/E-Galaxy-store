import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CartProvider,
  FilterContextProvider,
  LoginSignupProvider,
} from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <CartProvider>
          <AuthProvider>
            <LoginSignupProvider>
              <App />
            </LoginSignupProvider>
          </AuthProvider>
        </CartProvider>
      </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
