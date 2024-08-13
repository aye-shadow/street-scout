"use client";

import React from 'react';
import {TextField, TextFieldProps} from "@mui/material";
import {useVendorStore} from "@/features/vendor";

type Props = TextFieldProps & {

}

export function VendorNameInput ({ ...textFieldProps}: Props) {
  const name = useVendorStore(store => store.name)
  const setName = useVendorStore(store => store.setName);

  return (
    <TextField
      {...textFieldProps}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};
