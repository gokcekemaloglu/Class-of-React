import React, { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'
import { Button, Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import ProductModal from '../components/Modals/ProductModal'

const Products = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false),
    setInitialState({
      name : "",
      categoryId: "",
      brandId: ""
    })
  };
  const [initialState, setInitialState] = useState({
    name : "",
    categoryId: "",
    brandId: ""
  })

  const {products, loading} = useSelector(state => state.stock)

  console.log("Products:",products);
  console.log("Products:",initialState); 
  

  const {
    getStockData
  } = useStockCall()

  useEffect(()=>{
    getStockData("products")
    getStockData("brands")
    getStockData("categories")
  },[])

  return (
    <Container>
      <Typography
        align="center"
        color="secondary.second"
        variant="h4"
        component="h1"
      >
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Product</Button>
      {open && (
        <ProductModal open={open} handleClose={handleClose} initialState={initialState}/>
      )}
      <Grid container spacing={2} mt={2}>
        
      </Grid>
    </Container>
  )
}

export default Products