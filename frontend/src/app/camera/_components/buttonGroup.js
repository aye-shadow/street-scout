"use client";
import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function ButtonGroup() {
  const [method, setMethod] = useState("Enter Manually");

  const handleMethodChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setMethod(newAlignment);
    }
  };

  return (
    <>
      <Typography sx={{ mt: 2, mb: 1 }}>Upload Menu Instructions...</Typography>
      <ToggleButtonGroup
        id="user-role-select"
        value={method}
        size="small"
        exclusive
        onChange={handleMethodChange}
        aria-label="Street Scout"
        fullWidth
        sx={{
          marginBottom: "0.75rem",
          "& .MuiToggleButton-root": {
            color: "black", // Default text color
            borderColor: "rgb(var(--lightergreen))", // Border color
            "&.Mui-selected": {
              color: "white", // Text color when selected
              backgroundColor: "rgb(var(--lightergreen))", // Background color when selected
              "&:hover": {
                backgroundColor: "rgb(var(--lightergreen))", // Maintain selected background color on hover
              },
            },
            "&:hover": {
              backgroundColor: "rgba(var(--lightergreen), 0.08)", // Slightly transparent background on hover
            },
          },
        }}
      >
        <ToggleButton value="Enter Manually">Enter Manually</ToggleButton>
        <ToggleButton value="Upload Image">Upload Image</ToggleButton>
        <ToggleButton value="Camera">Camera</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
