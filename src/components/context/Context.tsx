"use client"
import React, { createContext, ReactNode, SetStateAction, useState } from "react";

interface ContextType {
    token: string | null
    setAccessToken:React.Dispatch<SetStateAction<string | null>>
}

export const Context = createContext<ContextType>({
    token:null,
    setAccessToken:() => ""
})

export const AuthContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [token, setAccessToken] = useState<string | null>(null)
    return <Context.Provider value={{token, setAccessToken}}>{children}</Context.Provider>
}