import React from 'react'
import { useState } from "react";
import { ContextAutor } from "./ContextAutor";

export const ProviderAutor = ({ children }) => {
    const [autor, setAutor] = useState("Alexia")
    return (
        <ContextAutor.Provider value={{ autor, setAutor }}>
            {children}
        </ContextAutor.Provider>
    )
}
