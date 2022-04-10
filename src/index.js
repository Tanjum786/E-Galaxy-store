import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./hooks/context/filterProvider";
import { CartProvider } from "./hooks/context/cart-wishlistcontext";
import { LoginSignupProvider } from "./hooks/context/loginSignup-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <CartProvider>
          <LoginSignupProvider>
            <App />
          </LoginSignupProvider>
        </CartProvider>
      </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
