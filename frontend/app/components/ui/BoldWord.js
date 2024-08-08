import React from "react";
import { Box } from "@mui/material";

export default function BoldWord({ text }) {
  return (
    <Box
      component="span"
      fontWeight={"bold"}
      color={"rgb(var(--lightergreen))"}
    >
      {text}
    </Box>
  );
}
