"use client";

import React, {ReactNode} from 'react';
import {InputAdornment, TextField, TextFieldProps} from "@mui/material";

type Props = TextFieldProps & {
  searchFontSize?: number
  startAdornComp?: ReactNode
  endAdornComp?: ReactNode
}

export function SearchBar ({
    searchFontSize = 12,
    startAdornComp,
    endAdornComp,
    ...textFieldProps
  }: Props
) {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "transparent",
          "&.Mui-focused fieldset": {
            borderColor: "rgb(var(--lightergreen))",
          },
        },
        "& .MuiInputBase-input": {
          fontSize: `${searchFontSize}px`,
        },
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
