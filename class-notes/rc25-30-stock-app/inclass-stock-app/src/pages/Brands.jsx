import React, { useEffect, useState } from 'react'
import useStockCall from '../hooks/useStockCall'
import { Button, Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import BrandCard from '../components/Cards/BrandCard'
import BrandModal from '../components/Modals/BrandModal'

const Brands = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false),
    setInitialState({
      name : "",
      image: ""
    })
  };
  const [initialState, setInitialState] = useState({
    name : "",
    image: ""
  })

  const {brands} = useSelector(state => state.stock)

  console.log(brands);
  

  const {
    // getBrands,
    getStockData
  } = useStockCall()

  useEffect(()=>{
    // getBrands()
    getStockData("brands")
  },[])

  return (
    <Container>
      <Typography
        align="center"
        color="secondary.second"
        variant="h4"
        component="h1"
      >
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Brand</Button>
      {open && <BrandModal open={open} handleClose={handleClose} initialState={initialState}/>}
      <Grid container spacing={2} mt={2}>
        {brands.map((brand) =>(
          <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
            <BrandCard {...brand} handleOpen={handleOpen} setInitialState={setInitialState}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Brands