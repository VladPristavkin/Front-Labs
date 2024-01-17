import React from "react";
import MUIButton from "@mui/material/Button";

function Button({ onClick, sx, children }) {
  return (
    <MUIButton variant="contained" onClick={onClick} sx={sx}>
      {children}
    </MUIButton>
  );
}

export default Button;
