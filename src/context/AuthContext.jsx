import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [auth, setAuth] = useState('hello')
    // const [git, setGit] = useState('hello')
    // const [loginArr, setLoginArr] = useState([]);

    let API_URL = 'https://comfortable-gold-belt.cyclic.app';
    return (
        <>
            <AuthContext.Provider value={{
                auth, setAuth,
                git,
                isLoggedIn, setIsLoggedIn,
                API_URL
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider;