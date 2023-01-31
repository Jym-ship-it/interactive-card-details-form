import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import bgcardfront from "../Assets/Images/bg-card-front.png";
import Inputs from "./Inputs";



export default function Cards({cardNumber , Name , Month , Year}) {
  const style = {
    frontCard: {
      position: "absolute",
      top: "80px",
      left: "150px",
    },
    frontCardBox: {
      backgroundImage: `url(${bgcardfront})`,
      width: "447px",
      height: "245px",
    },
    frontCardBoxSubCon: {
      padding: "95px 12px",
      display : 'flex',
      justifyContent : "center",
      flexDirection : "column",
    },
    lastField : {
        display : "flex",
        justifyContent : "space-between"
    },
    field : {
        fieldset: {
            border : "none"
          },
    },
    fields : {
        fieldset: {
            border : "none"
          },
    }
  };
  const [contra, setcontra] = useState(true)
  return (
    <Box sx={style.frontCard}>
      <Box sx={style.frontCardBox}>
        <Box sx={style.frontCardBoxSubCon}>
          <TextField
            value={cardNumber}
            placeholder = {"0000 0000 0000 0000"}
            sx = {style.field}
            inputProps={{
              readOnly: {contra},
              style : {color : "white" , textAlign : "right" , fontSize : "24px" , fontFamily : "Space Grotesk"}
            }}
          ></TextField>
          <Box sx = {style.lastField}>
            <TextField
              value={Name}
              sx = {style.fields}
              inputProps={{
                readOnly: {contra},
                style : {color : "white" , fontFamily : "Space Grotesk"},
              }}
              
            ></TextField>
            <TextField
              value={Month + "/" + Year}
              sx = {style.fields}
              inputProps={{
                readOnly: {contra},
                style : {color : "white" , textAlign : "right" ,fontFamily : "Space Grotesk"}
              }}
            ></TextField>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
