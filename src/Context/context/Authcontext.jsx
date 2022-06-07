import axios from "axios";
import { createContext, useContext, useState, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toast } from "../../components";
import { authReducer } from "./authReducer";

const authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [userDetailes, setUserDetailes] = useState({
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("users")) || {},
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [authState, Authdispatch] = useReducer(authReducer, {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirPassword: "",
    isSubmit: false,
  });

  const SignUp = async (
    email,
    password,
    lastName,
    firstName,
    confirPassword,
    checkUserDetailes,
    checkPassword
  ) => {
    if (checkUserDetailes()) {
      if (checkPassword()) {
        try {
          const response = await axios.post("/api/auth/signup", {
            email,
            password,
            lastName,
            firstName,
            confirPassword,
          });
          navigate(-2);
          Toast(`${firstName} successfully created account`, "success");
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.createdUser)
          );
          setUserDetailes({
            ...userDetailes,
            token: response.data.encodedToken,
            user: response.data.createdUser,
          });
        } catch (error) {
          Toast(`${error.response.data.errors[0]}`, "error");
        }
      }
    }
  };

  const loginPage = async (email, password) => {
    if (password !== "" && email !== "") {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "users",
            JSON.stringify(response.data.foundUser)
          );
          navigate(location?.state?.from?.pathname || "/", { replace: true });
          Toast(`successfully logedin`, "success");
          setUserDetailes({
            ...userDetailes,
            user: response.data.foundUser,
            token: response.data.encodedToken,
          });
        } else {
          Toast("somthing went wrong", "wrong");
        }
      } catch (error) {
        Toast(error.response.data.errors[0]);
      }
    }
  };
  return (
    <authcontext.Provider
      value={{
        SignUp,
        authState,
        Authdispatch,
        userDetailes,
        loginPage,
        setUserDetailes,
      }}
    >
      {children}
    </authcontext.Provider>
  );
};

const useAuth = () => useContext(authcontext);
export { useAuth, AuthProvider };
