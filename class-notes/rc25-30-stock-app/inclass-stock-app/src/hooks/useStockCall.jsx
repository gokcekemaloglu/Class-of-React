import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, getStockSuccess } from '../features/stockSlice'
// import axios from 'axios'
import useAxios from './useAxios'

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
          console.log(data);
          dispatch(getStockSuccess({stock:data.data, endpoint})) //* action creatorlar her zaman tek bir parametre kabul ederler
        } catch (error) {
          console.log(error);          
        }
    }

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
        console.log(error);
        dispatch(fetchFail())
      } finally {
        getStockData(endpoint)
      }
    }

  return { 
    // getFirms, 
    // getBrands, 
    getStockData,
    deleteStockData
  }
}

export default useStockCall