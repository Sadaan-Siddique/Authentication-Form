import React, { createContext, useState,useEffect } from "react";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [git, setGit] = useState('hello')
    // const [loginArr, setLoginArr] = useState([]);
    let cookieData = read_cookie('cookie');
    console.log(cookieData);
    useEffect(()=>{
        if(cookieData === true){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    },[])


    let API_URL = 'https://comfortable-gold-belt.cyclic.app';
    return (
        <>
            <AuthContext.Provider value={{
                isLoggedIn, setIsLoggedIn,
                API_URL
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider;