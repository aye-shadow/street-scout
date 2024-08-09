import React from "react";
import { Button } from "@mui/material";
import FontProvider from "@/theme/fontProvider";

export default function CustomButton({ text }) {
  return (
    <FontProvider>
      <Button
        variant="secondary"
        color="white"
        sx={{
          backgroundColor: "rgb(var(--lightergreen))",
          color: "white",
          fontSize: "12px",
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
