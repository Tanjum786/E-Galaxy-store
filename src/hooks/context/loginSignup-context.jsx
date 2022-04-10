import { createContext,useContext,useState } from "react";

const loginsignupcontext=createContext();



const LoginSignupProvider=(({children})=>{
    const showpasswordFun = () => {
        showpassword === "password"
          ? setshowpassword("text")
          : setshowpassword("password");
      };
    const [showpassword, setshowpassword] = useState("password");
    return(
        <loginsignupcontext.Provider value={{showpassword,setshowpassword,showpasswordFun}}>
            {children}
        </loginsignupcontext.Provider>
    )
})


const useloginsignup=()=>useContext(loginsignupcontext);
export {useloginsignup,LoginSignupProvider}