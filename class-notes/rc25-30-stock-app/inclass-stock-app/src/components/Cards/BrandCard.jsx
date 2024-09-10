import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useStockCall from '../../hooks/useStockCall';

const btnStyle = {cursor: "pointer", "&:hover": { color: "red" }}

const BrandCard = ({_id, name, image, handleOpen, setInitialState}) => {
    // console.log(name);

    const {deleteStockData} = useStockCall()
    
  return (
    <Card sx={{
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 4px 18px 3px",
        padding: "0.5rem",
      }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
          {name}
        </Typography>
        
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image={image}
        component="img"
        title={name}
      />
      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        <EditIcon sx={btnStyle} onClick={()=> {handleOpen(), setInitialState({_id, name, image})}}/>
        <DeleteOutlineIcon onClick={()=>deleteStockData("brands",_id)} sx={btnStyle}/>
      </CardActions>
    </Card>
  )
}

export default BrandCard