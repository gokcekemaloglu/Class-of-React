import { Box, Container, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFieldComp = () => {

  //? aşağıdaki inputun durumu true yada false'a göre değişiyor
  let errorr = true

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <div>
      <Container sx={{marginTop:6, display:"flex", flexDirection:"column"}}>
        <Typography variant="h4">
          TEXT-FIELD (input)
        </Typography>
        <Box sx={{mt:4}}>
          {/* margin="dense"=  az bir margin verir */}
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="email giriniz..."
            margin="dense"
          />
          <TextField
          required
          id="filled-required"
          label="Filled"
          defaultValue="Hello World"
          variant="filled"
          margin="normal"
          />
          <TextField
            error={errorr}
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText={errorr && "yanlış girdiniz"}
            variant="filled"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            margin="normal"
          >
            {/* https://mui.com/material-ui/react-select/ */}
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Container>
    </div>
  )
}

export default TextFieldComp