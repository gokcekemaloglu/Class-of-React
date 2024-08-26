import React from 'react'
import {Box, Button, Container, Typography} from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md" >
        {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
        alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
        <Typography variant="h1" component="h3" gutterBottom align="center" color="error" sx={{background:"#eee", mt:4, border:"1px solid red"}}>
          Typography Container Box Button
        </Typography>
        {/* body1: p etiketidir,body1=16px daha büyük fs ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}
        <Typography variant="button">
          span olacak Lorem, ipsum.
        </Typography>
        <Typography variant="body1">
          p etiketi olacak Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <Typography variant="body2">
          p etiketi olacak Lorem ipsum dolor sit amet consectetur.
        </Typography>
      </Container>

      <Box sx={{display:"flex", flexDirection:"column", marginTop:4, gap:2}}>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon/>}>DELETE</Button>
        <Button variant="contained" color="success" sx={{color:"lightblue"}} endIcon={<SendIcon />}>SEND</Button>
      </Box>
    </div>
  )
}

export default TypoButtons