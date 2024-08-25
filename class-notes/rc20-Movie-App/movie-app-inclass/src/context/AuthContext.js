import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { toastError, toastSuccess, toastWarn } from '../helpers/ToastNotify';
import { useNavigate } from 'react-router-dom';

//! context alanı açma

export const AuthContextt = createContext()

const AuthContext = ({children}) => {

  const [currentUser, setCurrentUser] = useState()

  const navigate = useNavigate()

  //! bu sayfaya ister login ister register ister google ile gelin, sadece bir seferliğine user kontrolu yapan fonksiyonu çalıştır.

  useEffect (()=>{
    userTakip()
  },[])

  //! register için sitede zincir yapılı fetch işlemi var. Biz burada async await'i tercih edelim dedik, iki kullanımı da görmemiz için.

  const createUser = async(email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toastSuccess("Register Successfully")
      navigate("/")

      //? USERTAKİPTEN SONRA -----kullanıcı profilini güncellemek için kullanılan firebase metodu, login logout da userTakip sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor.alttakini yazmazsam (register ile girdiğimde) navbarda displayName i göremem. alttakini yazmazsam sadece google ile girersem görürüm 

      await updateProfile(auth.currentUser, {displayName: displayName})
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

  //!google ile giriş

  //* https://console.firebase.google.com/

  const signUpGoogle = () => {
    //?google hesaplarına ulaşmak için firebase metodu
    const provider = new GoogleAuthProvider();

    //?açılır pencere ile giriş yapılması için firebase metodu

    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Google ile giriş başarılı")
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  //? userları alabilmek için (userObserver ismi ama biz anlaşılsın diye userTakip yazdık)
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder.login ile bilgiler gelir bizde burada currentUser ın içine atarız, signout olunca bilgiler gider bizde currentUser ın içini güncelleriz (register ve logindeki email vs ye navbardan ulaşabilmek için). google ile giriş yapınca user ile displayname gelir ama email ile girecekseniz en üstte update kodunu firebase den çağırmalısınız

  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // console.log(user);
        

        const {email, displayName, photoURL} = user
        setCurrentUser({email, displayName, photoURL})
      } else {
        // User is signed out
        setCurrentUser(false)
      }
    });
  }

  //! siteden çıkış

  const cikis = () => {
    signOut(auth)
    toastSuccess("Logout is Successfully")    
  }  

  //! forgot password

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  .then(() => {    
    toastWarn("Password reset email sent!")
  })
  .catch((error) => {
    toastError(error.message, "Error occured")    
  });
  }

  return (
    <AuthContextt.Provider value={{createUser, signIn, signUpGoogle, currentUser, cikis, forgotPassword}}>
      {children}
    </AuthContextt.Provider>
  )
}

export default AuthContext