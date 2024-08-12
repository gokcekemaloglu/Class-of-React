import React, { createContext } from 'react'

//! 1-Create context

export const KullaniciContext = createContext()

const KullaniciProvider = ({children}) => {
  return (
    <KullaniciContext.Provider value={{}}>
      {children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider