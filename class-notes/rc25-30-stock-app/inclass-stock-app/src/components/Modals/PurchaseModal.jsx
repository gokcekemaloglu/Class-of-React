import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { modalStyle } from '../../styles/globalStyle'
import {useNavigate} from "react-router-dom"
import useStockCall from '../../hooks/useStockCall'

const PurchaseModal = ({open, handleClose, initialState}) => {

  const navigate = useNavigate()

  const {firms, brands, products} = useSelector(state=>state.stock)
  // console.log(firms);

  const [info, setInfo] = useState(initialState)
  // console.log(info);

  const {putStockData, postStockData} = useStockCall()
  

  const handleChange = (e) => {
    // console.log(event.target.value);
    // console.log(e.target);
    setInfo({...info, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (info._id) {
      putStockData("purchases", info)
    } else {
      postStockData("purchases", info)
    }
    handleClose()
  }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl>
              <InputLabel variant="outlined" id="firm-select-label">
                Firm
              </InputLabel>
              <Select
                labelId="firm-select-label"
                label="Firm"
                name="firmId"
                value={info?.firmId?._id || info?.firmId || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={()=> navigate("/stock/firms")}>
                  Add New Firm
                </MenuItem>
                <hr />
                {firms?.map((firm)=>(
                  <MenuItem key={firm._id} value={firm._id}>
                    {firm.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant="outlined" id="brand-select-label">
                Brand
              </InputLabel>
              <Select
                labelId="brand-select-label"
                label="Brand"
                name="brandId"
                value={info?.brandId?._id || info?.brandId || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={()=> navigate("/stock/brands")}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((brand)=>(
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant="outlined" id="product-select-label">
                Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                label="Product"
                name="productId"
                // value={info?.productId?._id || info?.productId || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={()=> navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((product)=>(
                  <MenuItem key={product._id} value={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              id="quantity"
              name="quantity"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              id="price"
              type="number"
              variant="outlined"
              name="price"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.price}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              {info._id ? "Update Purchase" : "Add New Purchase"}
            </Button>
          </Box>
        </Box>
    </Modal>
  )
}

export default PurchaseModal