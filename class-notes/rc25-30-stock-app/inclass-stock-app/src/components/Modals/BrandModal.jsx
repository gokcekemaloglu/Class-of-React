import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react'
import useStockCall from '../../hooks/useStockCall';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BrandModal = ({open, handleClose, initialState}) => {

    const [info, setInfo] = useState(initialState)

    const {postStockData, putStockData} = useStockCall()

    const handleChange = (e) => {
        console.log(e.target.name);
        setInfo ({...info, [e.target.name]:e.target.value})
    }

    console.log(info);
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (info._id) {
            putStockData("brands", info)
        } else {
            postStockData("brands", info)
        }        
        handleClose()
    }
    
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Brand Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
                {info._id ? "Update Brand" : "Submit Brand"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default BrandModal