import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockmanEs from "mockman-js";
import {
  Cart,
  Forgotpassword,
  LandingPage,
  Login,
  Productlisting,
  Singup,
  Wishlist,
} from "./pages";
import { Footer } from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Productlisting />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/mock" element={<MockmanEs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
