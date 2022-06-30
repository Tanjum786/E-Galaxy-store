import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockmanEs from "mockman-js";
import {
  Cart,
  LandingPage,
  Login,
  Productlisting,
  Profilepage,
  Signup,
  Wishlist,
} from "./pages";
import { AddressModal, Footer, Profile } from "./components";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./RequireAuth";
import { Address, Myorder } from "./pages/Profilepage/Components";
import { useState } from "react";

function App() {
  const [showAddressModal, setAddressModal] = useState(false);
  const [editAddress,setEditAddress]=useState(null)

  return (
    <div className="App">
      {showAddressModal ? (
        <AddressModal
          showAddressModal={showAddressModal}
          setAddressModal={setAddressModal}
          setEditAddress={setEditAddress}
          editAddress={editAddress}
        />

      ) : null}
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/profilepage"
          element={
            <RequireAuth>
              <Profilepage />
            </RequireAuth>
          }
        >
          <Route
            path="address"
            element={
              <Address
                setAddressModal={setAddressModal}
                setEditAddress={setEditAddress}
              />
            }
          />
          <Route path="myorder" element={<Myorder />} />
        </Route>
        <Route path="/product" element={<Productlisting />} />
        <Route path="/mock" element={<MockmanEs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
