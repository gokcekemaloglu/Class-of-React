import React from 'react'

//! 2. Yol ( daha az tercih edilen, hatta kullanılmasa daha iyi olur) 
//! action sayfasını buraya aldık

export const arttir = () => ({type:"ARTTIR", payload1:"ARTTIRILDI"})

// const counterReducer = (state={sayac:0,text1:""},action1) => {
  // console.log(action1);
  const counterReducer = (state={sayac:0,text1:""},{type, payload1}) => {
  
  switch (type) {
    case "ARTTIR":
      return{sayac: state.sayac + 1, text1:payload1}
      
    case "AZALT":
      return{sayac: state.sayac - 1}
      
    case "RESETLE":
      return{sayac: 0, text1: payload1}
      
    default:
      break;
  }
}

export default counterReducer