// garson

// (fonksiyonda gönderdiğimiz argüman aldığımız parametre)

export const ekle = (input) => (
    {type:"EKLE", payload:input}
)

export const sil = (gorev) => ({type:"SIL", payload:gorev})

//! 2- değiştir fonksiyonunu tanımla ve completed'ı değişecek elemanı (mutfağa) reducer'a ilet
export const degistir = (gorev) => ({type:"DEGISTIR", payload: gorev})