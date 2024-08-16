"use client";

import React, {ReactNode} from 'react';
import {InputAdornment, TextField, TextFieldProps} from "@mui/material";

export type SearchBarProps = TextFieldProps & {
  fontSize?: number
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  bgColor?: string;
}

export function SearchBar ({
    fontSize = 12,
    startAdornment,
    endAdornment,
    bgColor = "transparent",
    ...textFieldProps
  }: SearchBarProps
) {
  return (
    <TextField
      value=''
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
        ...(endAdornment
          ? {}
          : {
            display: { xs: "none", sm: "block" },
          }),
      }}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : null,
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : null,
      }}
      {...textFieldProps }
    />
  );
};
