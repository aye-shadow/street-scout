"use client";

import React from "react";
import {Button} from "@mui/material";
import FontProvider from "@/theme/fontProvider";
import {useNearbyVendors} from "@/features/location";

export default function CustomButton({ text, size = '12px', buttonType = 'button', hundredWidth = false, onClick }) {
  const { fetchNearby } = useNearbyVendors()
  return (
    <FontProvider>
      <Button
        variant="secondary"
        color="white"
        sx={{
          backgroundColor: "rgb(var(--lightergreen))",
          color: "white",
          fontSize: size, // default size is 12px
          "&:hover": {
            backgroundColor: "rgba(var(--lightergreen), 0.7)",
          },
        }}
        type={buttonType}
        onClick={onClick || () => fetchNearby()}
      >
        {text}
      </Button>
    </FontProvider>
  );
}
