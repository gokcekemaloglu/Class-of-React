import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

//! context alanı

export const MovieContextt = createContext()

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContext = ({children}) => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  useEffect(()=>{
    getirMovies()
  },[])

  const getirMovies = () => {
    setLoading(true)
    axios.get(BASE_URL).then((res)=>setMovies(res.data.results)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
    
  }  
  
  return (
    <MovieContextt.Provider value={{movies, loading}}>
      {children}
    </MovieContextt.Provider>
  )
}

export default MovieContext