import React, { createContext, useEffect, useState } from 'react'

//! 1-Create context

export const KullaniciContext = createContext()


const KullaniciProvider = ({children}) => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
  fetch("https://api.github.com/users").then((res)=>res.json()).then((data)=>setUsers(data))
},[])

// axiosla yapsaydık
//   useEffect(()=>{
//   const res = axios.get("https://api.github.com/users")
//   const data = res ()....... eksik
// },[])

  const changeWidth = (id, size) => {
    setUsers(users.map((a) => a.id === id ?{...a, width: size} : a))
  }
  
  return (
    <KullaniciContext.Provider value={{users, changeWidth}}>
      {children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider