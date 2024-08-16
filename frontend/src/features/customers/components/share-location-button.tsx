"use client";

import React from 'react';
import {Button, ButtonProps} from "@mui/material";
import {useGeolocation} from "@/features/location";

interface Props {}

export function ShareLocationButton (props: ButtonProps) {
  const { getGeoLocation } = useGeolocation()
  return (
    <Button
      {...props}
      variant="contained"
      onClick={() => getGeoLocation()}
      sx={{
        bgcolor: "#F3F695",
        color: "black",
        border: "2px solid #D9EF11",
        borderRadius: 5,
        "&:hover": {
          bgcolor: "#B2FF66",
          color: "black",
          border: "2px solid white",
        },
      }}
    >
      Share Location
    </Button>
  );
};
