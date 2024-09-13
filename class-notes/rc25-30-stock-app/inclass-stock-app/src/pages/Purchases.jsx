import React, { useEffect, useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import PurchaseTable from '../components/Tables/PurchaseTable'
import PurchaseModal from '../components/Modals/PurchaseModal'
import useStockCall from '../hooks/useStockCall'
import { useSelector } from 'react-redux'
import loadingGif from "../assets/loading.gif";

const Purchases = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false),
    setInitialState({
      firmId : "",
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    })
  };
  const [initialState, setInitialState] = useState({
    firmId : "",
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  })

  const{getStockData, getFirmBrandPro} = useStockCall()

  useEffect(()=>{
    getStockData("purchases")
    
    getFirmBrandPro()
  },[])

  const {purchases, loading, error} = useSelector(state=>state.stock)

  console.log(purchases);
  console.log(initialState); 
  

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        color="secondary.second"
        variant="h4"
        component="h1"
      >
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Product</Button> 
      {open && <PurchaseModal open={open} initialState={initialState} handleClose={handleClose}/>}
      {loading ? (
        <img src={loadingGif} alt="loading..." height={400} />
      ) : error ? (
        <Typography>
          Something went wrong...
        </Typography>
      ) : (
        <PurchaseTable handleOpen={handleOpen} setInitialState={setInitialState}/>        
      )}        
    </Container>
  )
}

export default Purchases