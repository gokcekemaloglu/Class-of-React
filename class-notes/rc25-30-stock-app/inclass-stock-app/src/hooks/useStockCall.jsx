import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getFirmBrandProSuccess, getProCatBrandSuccess, getPurSalesSuccess, getSalesBrandProSuccess, getStockSuccess } from '../features/stockSlice'
// import axios from 'axios'
import useAxios from './useAxios'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'

const useStockCall = () => {

    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const axiosWithToken = useAxios()
    
    // const getFirms = async () => {
    //     dispatch(fetchStart())
    //     try {
    //       const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
    //         headers : {
    //           Authorization: `Token ${token}`
    //         }
    //       })
    //       console.log(data);
    //       dispatch(firmSuccess(data))          
    //     } catch (error) {
    //       console.log(error);          
    //     }
    // }
    
    // const getBrands = async () => {
    //     dispatch(fetchStart())
    //     try {
    //       const {data} = await axios(`${import.meta.env.VITE_BASE_URL}brands`, {
    //         headers : {
    //           Authorization: `Token ${token}`
    //         }
    //       })
    //       console.log(data);
    //       dispatch(brandSuccess(data))          
    //     } catch (error) {
    //       console.log(error);          
    //     }
    // }

    //!!!

    //* DRY
    //! yukarıdaki gibi her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz

    const getStockData = async (endpoint) => {
        dispatch(fetchStart())
        try {
          // const {data} = await axios(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
          //   headers : {
          //     Authorization: `Token ${token}`
          //   }
          // })
          const {data} = await axiosWithToken.get(endpoint)
          // console.log(data);
          dispatch(getStockSuccess({stock:data.data, endpoint})) //* action creatorlar her zaman tek bir parametre kabul ederler
        } catch (error) {
          // console.log(error);
          dispatch(fetchFail())
        }
    }

    //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.
  //? https://axios-http.com/docs/instance

    const deleteStockData = async (endpoint, id) => {
      dispatch(fetchStart())
      try {
        // await axios.delete(`${import.meta.env.VITE_BASE_URL}${endpoint}/${id}`, {
        //   headers: {
        //     Authorization: `Token ${token}`
        //   }
        // })
        await axiosWithToken.delete(`${endpoint}/${id}`)
        // getStockData(endpoint)
      } catch (error) {
        // console.log(error);
        dispatch(fetchFail())
      } finally {
        getStockData(endpoint)
      }
    }

    const postStockData = async (endpoint, info) => {
      dispatch(fetchStart())
      try {
        const {data} = await axiosWithToken.post(endpoint, info)
        // console.log(data);        
      } catch (error) {
        // console.log(error); 
        dispatch(fetchFail()) 
        toastErrorNotify(error.response.data.message,"error occured")      
      } finally {
        getStockData(endpoint)
      }
    }

    const putStockData = async (endpoint, info) => {
      dispatch(fetchStart())
      try {
        const {data} = await axiosWithToken.put(`${endpoint}/${info._id}`, info)
        // console.log(data);        
        toastSuccessNotify(`${endpoint}is succesfull`)
      } catch (error) {
        // console.log(error); 
        dispatch(fetchFail())         
      } finally {
        getStockData(endpoint)
      }
    }

    const getProCatBrand = async () => {
      dispatch(fetchStart())
      try {
        // const [a,b] = [1,2] // array descturing tek satırda birçok değişken tanımlaması yapılabiliyor bu sayede // best practice
        // let [a,b] = [1,2] // array descturing tek satırda birçok değişken tanımlaması yapılabiliyor bu sayede
        const [products, categories, brands] = await Promise.all([
          axiosWithToken("products"),
          axiosWithToken("categories"),
          axiosWithToken("brands")
        ])
        // console.log("products", products);
        dispatch(getProCatBrandSuccess([products?.data?.data, categories?.data?.data, brands?.data?.data])) // object ya da array olarak gönderebiliriz
        
      } catch (error) {
        dispatch(fetchFail())
      }
    }
    const getFirmBrandPro = async () => {
      dispatch(fetchStart())
      try {
        const [firms, brands, products] = await Promise.all([
          axiosWithToken.get('firms'),
          axiosWithToken.get('brands'),
          axiosWithToken.get('products'),
        ])
        dispatch(getFirmBrandProSuccess([ firms?.data?.data, brands?.data?.data, products?.data?.data ]))
      } catch (error) {
        dispatch(fetchFail())
      }
    }
    const getPurSales = async () => {
      dispatch(fetchStart())
      try {
        const [purchases, sales] = await Promise.all([
          axiosWithToken.get('purchases'),
          axiosWithToken("sales")
        ])
        dispatch(getPurSalesSuccess([purchases.data, sales.data]))
      } catch (error) {
        dispatch(fetchFail())
      }
    }
    const getSalesBrandPro = async () => {
      dispatch(fetchStart())
      try {
        const [sales, brands, products] = await Promise.all([
          axiosWithToken("sales"),
          axiosWithToken.get('brands'),
          axiosWithToken.get('products'),
        ])
        dispatch(getSalesBrandProSuccess([sales.data, brands.data, products.data, ]))
      } catch (error) {
        dispatch(fetchFail())
      }
    }

  return { 
    // getFirms, 
    // getBrands, 
    getStockData,
    deleteStockData,
    postStockData,
    putStockData,
    getProCatBrand,
    getFirmBrandPro,
    getPurSales,
    getSalesBrandPro
  }
}

export default useStockCall