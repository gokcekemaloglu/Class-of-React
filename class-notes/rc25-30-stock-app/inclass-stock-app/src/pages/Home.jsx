import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import KpiCards from '../components/KpiCards'
import Charts from '../components/Charts'
import useStockCall from '../hooks/useStockCall'

const Home = () => {

  const {getPurSales} = useStockCall()

  useEffect(()=>{
    getPurSales()
  },[])


  return (
    <Container>
      <Typography maxWidth={"xl"}
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Dashboard
      </Typography>
      <KpiCards/>
      <Charts/>
    </Container>
  )
}

export default Home