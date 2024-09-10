import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose, initialState }) {
  //* Firms'e taşıdık
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  // const [info, setInfo] = React.useState({
  //     name: "",
  //     phone: "",
  //     address: "",
  //     image: ""
  // })

  const [info, setInfo] = React.useState(initialState);//* ilk renderda başlangıç değerini kopyalar sonraki değişimlerden etkilenmez.

  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.name);
    // console.log(e.target.id);

    setInfo({ ...info, [e.target.name]: e.target.value }); //* ["name"]:e.target.value - ["address"]:e.target.value...
    // setInfo({...info, [e.target.id]: e.target.value})

    // console.log(info); //!setter asenkron çalışır
  };

  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStockData("firms", info);
    } else {
      postStockData("firms", info);
    }
    // setInfo({
    //     name: "",
    //     phone: "",
    //     address: "",
    //     image: ""
    // }) handleClose çağırınca gerek kalmadı
    handleClose();
  };

//   React.useEffect(() => {
//     setInfo(initialState);
//   }, [initialState]); bunun yerine Firms sayfasında {open && <FirmModal open={open} handleClose={handleClose} initialState={initialState}/>} bunu kullandık

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <TextField
              name="name"
              label="Firm Name"
              type="text"
              id="name"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              name="address"
              label="Firm Address"
              type="text"
              id="address"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              name="phone"
              label="Firm Phone"
              type="text"
              id="phone"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              name="image"
              label="Firm Image"
              type="url"
              id="image"
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
