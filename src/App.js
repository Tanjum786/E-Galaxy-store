import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Forgotpassword, LandingPage, Login, Productlisting, Singup, Wishlist } from "./pages";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Singup/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<Productlisting/>}/>
      <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
    </Routes>
    </div>
  );
}

export default App;
