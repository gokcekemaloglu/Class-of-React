import axios from "axios"
import {useDispatch} from "react-redux"
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice"
import { useNavigate } from "react-router-dom"

const useAuthCall = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const register = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post("https://19101.fullstack.clarusway.com/users",userInfo);
            console.log(data)
            dispatch(registerSuccess(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const login = async () => {
        dispatch(fetchStart())
        try {
            
        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return {register, login}

}

export default useAuthCall;

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch, state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.