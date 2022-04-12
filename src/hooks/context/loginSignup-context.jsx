import { createContext,useContext,useState } from "react";

const loginsignupcontext=createContext();



const LoginSignupProvider=(({children})=>{
    const showPasswordFun = () => {
        showPassword === "password"
          ? setShowPassword("text")
          : setShowPassword("password");
      };
    const [showPassword, setShowPassword] = useState("password");
    return(
        <loginsignupcontext.Provider value={{showPassword,setShowPassword,showPasswordFun}}>
            {children}
        </loginsignupcontext.Provider>
    )
})


const useloginsignup=()=>useContext(loginsignupcontext);
export {useloginsignup,LoginSignupProvider}