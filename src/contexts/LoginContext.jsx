import { createContext, useContext, useEffect, useState } from "react"

export const ContextToken = createContext("")

export const TokenProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("user_token") || null)

    useEffect(() => {
        localStorage.setItem("user_token", token)
    }, [token])


    return(
        <ContextToken.Provider value={{token, setToken}}>
            {children}
        </ContextToken.Provider>
    )
}