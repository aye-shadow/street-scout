"use client";

import React, {ReactNode, useState} from 'react';
import {TextField, TextFieldProps} from "@mui/material";
import {useVendorSearchStore} from "@/features/search";

interface Props {
  data?: any;
  children?: ReactNode;
}

export function VendorSearchInput (props: TextFieldProps) {

  const {query, setQuery} = useVendorSearchStore()

  return (
    <TextField
      {...props}
      label="Search Vendors"
      variant="outlined"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={{
        backgroundColor: "#F3F695",
        width: "40%",
        borderRadius: 2,
        height: "40px", // Adjust height as needed
      }}
      InputProps={{
        sx: {
          height: "100%", // Ensure input field fills the full height
          padding: "0 14px", // Adjust padding as needed
        },
      }}
      InputLabelProps={{
        sx: {
          lineHeight: "1em", // Adjust line height for the label
          transform: "translate(14px, 10px) scale(1)", // Adjust label position
        },
      }}
    />
  );
};
