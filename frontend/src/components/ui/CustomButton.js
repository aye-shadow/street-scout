import React from "react";
import { Button } from "@mui/material";
import FontProvider from "@/theme/fontProvider";
import { useNearbyVendors } from "@/features/location";

export default function CustomButton({
  text,
  size = "12px",
  buttonType = "button",
  hundredWidth = false,
  onClick,
  ...buttonProps // Spread additional Button props
}) {
  const { fetchNearby } = useNearbyVendors();
  const handleClick = onClick || fetchNearby;

  return (
    <FontProvider>
      <Button
        sx={{
          backgroundColor: "rgb(var(--lightergreen))",
          color: "white",
          fontSize: size,
          "&:hover": {
            backgroundColor: "rgba(var(--lightergreen), 0.7)",
          },
        }}
        type={buttonType}
        onClick={handleClick}
        fullWidth={hundredWidth}
        {...buttonProps} // Spread additional Button props
      >
        {text}
      </Button>
    </FontProvider>
  );
}
