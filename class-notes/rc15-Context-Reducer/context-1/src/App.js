import React, { createContext, useState } from 'react'
import Home from './components/Home'
import data from "./data"

//! 1-Context alanı açıyoruz (kısa yol ama best practise değil)

export const StudentContext = createContext()

const App = () => {

  const [students, setStudents] = useState(data)

  const changeColor = (id, newRenk) => {
    setStudents(students.map((a)=>a.id===id ? {...a, color:newRenk} : a))
  }
  
  return (

    //! 2-Bütün projeye gönderilmek üzere ilk Home sayfasını(componentini)gönderilecek verilerle sarmalladık
    <StudentContext.Provider value={{students, changeColor}}>

      <Home/>

    </StudentContext.Provider>
  )
}

export default App