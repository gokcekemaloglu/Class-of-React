//! context alanı create edelim

import { createContext, useState } from "react";

export const RecipeContext = createContext()

const RecipeProvider = ({children}) => {

    //! login ve privateRouter sayfalarında gerekli useState'leri açıyoruz
    
    const [name, setName] = useState(localStorage.getItem("username") || "")
    const [password, setPassword] = useState(localStorage.getItem("password") || "")

    return (
        <RecipeContext.Provider value={{name, password, setName, setPassword}}>
            {children}
        </RecipeContext.Provider>
    )

}

export default RecipeProvider;