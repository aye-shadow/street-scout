"use client";

import React, {ReactNode} from 'react';
import {InputAdornment, TextField, TextFieldProps} from "@mui/material";

export type SearchBarProps = TextFieldProps & {
  fontSize?: number
  startAdornComp?: ReactNode
  endAdornComp?: ReactNode
  bgColor?: string;
}

export function SearchBar ({
    fontSize = 12,
    startAdornComp,
    endAdornComp,
    bgColor = "transparent",
    ...textFieldProps
  }: SearchBarProps
) {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      size="medium"
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: bgColor,
          "&.Mui-focused fieldset": {
            borderColor: "rgb(var(--lightergreen))",
          },
        },
        "& .MuiInputBase-input": {
          fontSize: `${fontSize}px`,
        },
        ...(endAdornComp
          ? {}
          : {
            display: { xs: "none", sm: "block" },
          }),
      }}
      InputProps={{
        startAdornment: startAdornComp ? (
          <InputAdornment position="start">{startAdornComp}</InputAdornment>
        ) : null,
        endAdornment: endAdornComp ? (
          <InputAdornment position="end">{endAdornComp}</InputAdornment>
        ) : null,
      }}
      {...textFieldProps }
    />
  );
};
