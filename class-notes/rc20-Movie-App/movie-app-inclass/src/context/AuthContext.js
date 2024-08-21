import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { toastError, toastSuccess } from '../helpers/ToastNotify';
import { useNavigate } from 'react-router-dom';

//! context alanı açma

export const AuthContextt = createContext()

const AuthContext = ({children}) => {

  const navigate = useNavigate()

  //! register için sitede zincir yapılı fetch işlemi var. Biz burada async await'i tercih edelim dedik, iki kullanımı da görmemiz için.

  const createUser = async(email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toastSuccess("Register Successfully")
      navigate("/")
    } catch (error) {
      toastError(`${error.message} yanlış girdiniz`)
    }    
  }

  //! login

  const signIn = async(email,password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccess("Logged in Successfully")
      navigate("/")
    } catch (error) {
      toastError(`${error.message} yanlış girdiniz`)
    }
    
  }

  return (
    <AuthContextt.Provider value={{createUser, signIn}}>
      {children}
    </AuthContextt.Provider>
  )
}

export default AuthContext