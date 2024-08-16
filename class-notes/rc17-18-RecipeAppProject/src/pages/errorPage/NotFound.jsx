import React, { useEffect, useState } from 'react'
import Main from './NotFoundStyle'
import { Navigate } from 'react-router-dom'

const NotFound = () => {

  const [sayac, setSayac] = useState(5)

  useEffect(()=>{
    const timer = setInterval(()=>{
      setSayac((sayac)=>(sayac === 0 ? sayac : sayac - 1))

      if (sayac===0) {
        clearInterval(timer)
      }      
    },1000)
  },[])

  // console.log(sayac);
  

  if (sayac===0) {
    return <Navigate to="/home"/>
  }

  return (
    <Main>
      <h3>
        Something went wrong...
      </h3>
      <p>
        Within <strong>{sayac}</strong> seconds, you will be redirected to the home page!
      </p>
    </Main>
  )
}

export default NotFound