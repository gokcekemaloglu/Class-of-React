import React, { useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import loadingGif from "../assets/loading.gif"
import { getData, temizle } from '../features/haberSlice';

const News = () => {

  const dispatch = useDispatch()
  const {loading, haberler} = useSelector((state)=>state.haberSlice)

  useEffect(()=>{
    dispatch(getData())
  },[dispatch])

  return (
    <>    
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadingGif} alt="" height="800px"/>
        </Box>
      ) : (
        <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {haberler.map((a, index) => (
          <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }} key={index}>
            <CardMedia component="img" image={a.urlToImage} height="250" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {a.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {a.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>dispatch(temizle())}>
                CLEAR
              </Button>
              <Button size="small" href={a.url} target="_blank">
                DETAIL
              </Button>
            </CardActions>
          </Card>
        ))}
        </Box>
      )}
      
      
    </>
  );
}

export default News