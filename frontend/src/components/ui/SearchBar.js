import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import FontProvider from "../../theme/fontProvider";

export default function SearchBar({
  searchFontSize,
  searchBarSize,
  bgColor,
  placeholderText,
  startAdornComp,
  endAdornComp,
}) {
  return (
    <FontProvider>
      <TextField
        placeholder={`${placeholderText}`}
        variant="outlined"
        size={searchBarSize ? searchBarSize : "medium"}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: bgColor || "transparent",
            "&.Mui-focused fieldset": {
              borderColor: "rgb(var(--lightergreen))",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: `${searchFontSize}px`,
          },
          // Apply display style conditionally based on endAdornComp
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
      />
    </FontProvider>
  );
}
