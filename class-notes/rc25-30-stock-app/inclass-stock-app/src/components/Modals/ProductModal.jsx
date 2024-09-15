import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";
import { flexColumn, modalStyle } from "../../styles/globalStyle";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const ProductModal = ({ open, handleClose, initialState }) => {
  const [info, setInfo] = useState(initialState);

  const { postStockData, putStockData } = useStockCall();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    // console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStockData("products", info);
    } else {
      postStockData("products", info);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={flexColumn}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.categoryId}
                name="categoryId"
                label="Category"
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                id="demo-simple-brand"
                value={info.brandId}
                label="Brand"
                name="brandId"
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit">
              {info._id ? "Update Product" : "Submit Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;
