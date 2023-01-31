import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CardBack from "./CardBack";
import Cards from "./Cards";

export default function Inputs() {
  const style = {
    texts: {
      fontSize: "16px",
      fontFamily: "Space Grotesk",
      marginTop: "18px",
    },
    textFields: {
      width: "400px",
      marginTop: "12px",
      fieldset: {
        borderRadius: "12px",
      },
    },
    lastInputs: {
      display: "flex",
    },
    lastTextFields: {
      width: "91px",
      marginRight: "8px",
      marginTop: "12px",
      fieldset: {
        borderRadius: "12px",
      },
    },
    lastTextFieldss: {
      width: "192px",
      marginTop: "12px",
      fieldset: {
        borderRadius: "12px",
      },
    },
    lastCon: {
      marginLeft: "8px",
    },
    button: {
      width: "400px",
      height: "50px",
      backgroundColor: "hsl(278, 68%, 11%)",
      fontFamily: "Space Grotesk",
      fontSize: "16px",
      borderRadius: "12px",
      marginTop: "100px",
      color: "white",
      "&:hover": {
        backgroundColor: "hsl(279, 6%, 55%)",
      },
    },
  };
  let [cardNumber, setcardNumber] = useState();
  const [Name, setName] = useState()
  const [Month, setMonth] = useState("")
  const [Year, setYear] = useState("")
  const [Cvc , setCvc] = useState ()
  const handleChange = (e) => {
    setcardNumber(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  }
  const handleYearChange = (e) => {
    setYear(e.target.value)
  }
  const handleCVCChange = (e) => {
    setCvc(e.target.value)
  }

  return (
    <Box>
      <Box>
        <Typography sx={style.texts}>CARDHOLDER NAME</Typography>
        <TextField
          id="cardnumber"
          placeholder="Please enter your name..."
          inputProps={{ maxLength: 32 }}
          value={Name}
          onChange = {handleNameChange}
          sx={style.textFields}
          variant="outlined"
        ></TextField>
      </Box>
      <Box>
        <Typography sx={style.texts}>CARD NUMBER</Typography>
        <TextField
          value={cardNumber}
          onChange={handleChange}
          placeholder="Please enter your card number..."
          sx={style.textFields}
          variant="outlined"
          inputProps={{ maxLength: 16 }}
        ></TextField>
      </Box>
      <Box sx={style.lastInputs}>
        <Box>
          <Typography sx={style.texts}>EXP. DATE (MM/YY)</Typography>
          <Box>
            <TextField
              sx={style.lastTextFields}
              placeholder="MM"
              variant="outlined"
              value={Month}
              inputProps={{ maxLength: 2 }}
              onChange={handleMonthChange}
            ></TextField>
            <TextField
              placeholder="YY"
              variant="outlined"
              type="year"
              value={Year}
              inputProps={{ maxLength: 4 }}
              onChange={handleYearChange}
              sx={style.lastTextFields}
            ></TextField>
          </Box>
        </Box>
        <Box sx={style.lastCon}>
          <Typography sx={style.texts}>CVC</Typography>
          <TextField
            sx={style.lastTextFieldss}
            value = {Cvc}
            inputProps={{ maxLength: 3 }}
            onChange = {handleCVCChange}
            placeholder="CVC"
            variant="outlined"
          ></TextField>
        </Box>
      </Box>
      <Box>
        <Button sx={style.button}>Confirm</Button>
      </Box>
      <Cards cardNumber={cardNumber} Name = {Name} Month = {Month} Year = {Year} />
      <CardBack Cvc = {Cvc}></CardBack>
    </Box>
  );
}
