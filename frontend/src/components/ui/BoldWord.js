import React from "react";
import { Box } from "@mui/material";

export default function BoldWord({ children }) {
  return (
    <Box
      component="span"
      fontWeight={"bold"}
      color={"rgb(var(--lightergreen))"}
    >
      {children}
    </Box>
  );
}
