import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyle";

//! aynı yapıyı diğer modallarda da kullancağımız için globalStyle.js dosyasına taşıdık oradan export edip her yerde kullanabiliyoruz.
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

export default function FirmModal({ open, handleClose,initialState }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

//   const [info, setInfo] = React.useState({
//     name: "",
//     phone: "",
//     address: "",
//     image: "",
//   });
  const [info, setInfo] = React.useState(initialState);//* ilk renderda başlangıç değerini kopyalar sonraki değişimlerden etkilenmez.
  const { postStockData,putStockData } = useStockCall();
  const handleChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.name)
    // console.log(e.target.id)
    // setInfo({...info,[e.target.id]:e.target.value})
    setInfo({ ...info, [e.target.name]: e.target.value }); //* ["name"]:e.target.value - ["address"]:e.target.value...
    // console.log(info) //! setter asenkron çalışır
  };
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(info._id){
        putStockData("firms",info)
    }else{
        postStockData("firms", info);
    }
    // setInfo({ name: "", phone: "", address: "", image: "" });
    handleClose()
  };


//   React.useEffect(()=>{
//     setInfo(initialState)
//   },[initialState])

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
            // sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            sx={flexColumn}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Firm Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Firm Phone"
              name="phone"
              id="phone"
              type="text"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Firm Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              {info._id ? "Update Firm" : "Submit Firm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
