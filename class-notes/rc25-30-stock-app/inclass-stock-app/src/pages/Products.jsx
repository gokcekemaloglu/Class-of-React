import React, { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'
import { Button, Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import ProductModal from '../components/Modals/ProductModal'
import ProductTable from '../components/Tables/ProductTable'

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

  const {products, loading, error} = useSelector(state => state.stock)

  // console.log("Products:",products);
  // console.log("Products:",initialState); 
  

  const {
    getStockData,
    getProCatBrand
  } = useStockCall()

  useEffect(()=>{
    // getStockData("products")
    // getStockData("brands")
    // getStockData("categories")
    getProCatBrand()
  },[])

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Products
      </Typography>
      {loading ? (
        <Typography
          align="center"
          variant="h5"
          component="h3"
          color="secondary.second"
        >
          Loading....
        </Typography>
      ) : error ? (
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ) : (
        <>
          <Button variant="contained" onClick={handleOpen}>
            New Product
          </Button>

          <ProductTable />

          {open && (
            <ProductModal
              open={open}
              handleClose={handleClose}
              initialState={initialState}
            />
          )}
        </>
      )}
    </Container>
  )
}

export default Products