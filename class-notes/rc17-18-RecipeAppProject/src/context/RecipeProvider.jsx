//! context alanı create edelim

import { createContext, useState } from "react";
import axios from "axios"

export const RecipeContext = createContext()

const APP_ID = "f5582f52"
const APP_KEY = "6a6ce74a47a95bf392e9d4c869d63d8b"

const RecipeProvider = ({children}) => {

    //! login ve privateRouter sayfalarında gerekli useState'leri açıyoruz

    const [name, setName] = useState(localStorage.getItem("username") || "")
    const [password, setPassword] = useState(localStorage.getItem("password") || "")

    //! home, header ve recipeCard'da gerekli olan veriler

    

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState("pie")
    const [mealType, setMealType] = useState("Breakfast")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

    const getData = async() => {

        const {data} = await axios.get(url)
        setRecipes(data.hits)

        // console.log(data);
        // console.log(recipes);
        
    }

    
    return (
        <RecipeContext.Provider value={{name, password, setName, setPassword, setQuery, setMealType, recipes, getData}}>
            {children}
        </RecipeContext.Provider>
    )

}

export default RecipeProvider;