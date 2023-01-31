import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bgcardback from "../Assets/Images/bg-card-back.png";

export default function CardBack({Cvc}) {
  const style = {
    mainCon: {
      position: "absolute",
      top: "350px",
      left: "300px",
    },
    cardBack: {
      backgroundImage: `url(${bgcardback})`,
      width: "447px",
      height: "245px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    field: {
      width: "360px",
      fieldset: {
        border: "none",
      },
    },
  };
  return (
    <Box sx={style.mainCon}>
      <Box sx={style.cardBack}>
        <TextField
          sx={style.field}
          size="small"
          value={Cvc}
          inputProps={{
            readOnly: "true",
            style: { color: "white", textAlign: "right" },
          }}
        ></TextField>
      </Box>
    </Box>
  );
}
