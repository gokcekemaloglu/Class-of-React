import { Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SalesTable from '../components/Tables/SalesTable'
import SalesModal from '../components/Modals/SalesModal'
import useStockCall from '../hooks/useStockCall'

const Sales = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false),
    setInitialState({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    })
  };
  const [initialState, setInitialState] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  })

  const {getSalesBrandPro} = useStockCall()

  useEffect(()=>{
    getSalesBrandPro()
  },[])

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        color="secondary.second"
        variant="h4"
        component="h1"
      >
        Sales
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>
      <SalesModal open={open} handleClose={handleClose} initialState={initialState}/>
      <SalesTable handleOpen={handleOpen} setInitialState={setInitialState}/>
    </Container>
  )
}

export default Sales