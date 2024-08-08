import React from "react";
import { Button } from "@mui/material";
import FontProvider from "@/app/theme/fontProvider";

export default function CustomButton({ text, size }) {
  return (
    <FontProvider>
      <Button
        variant="secondary"
        color="white"
        sx={{
          backgroundColor: "rgb(var(--lightergreen))",
          color: "white",
          fontSize: `${size}px`,
          "&:hover": {
            backgroundColor: "rgba(var(--lightergreen), 0.7)", 
          },
        }}
      >
        {text}
      </Button>
    </FontProvider>
  );
}
