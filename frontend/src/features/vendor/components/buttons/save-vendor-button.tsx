"use client";

import React, { ReactNode } from 'react';
import {Button, ButtonProps} from "@mui/material";
import {useUpdateVendor} from "@/features/vendor";

interface Props extends ButtonProps {
  children?: ReactNode;
}

export function SaveVendorButton ({ children, ...buttonProps }: Props) {
  const { mutate : updateVendor } = useUpdateVendor();
  return (
    <Button
      value={"Save"}
      {...buttonProps}
      onClick={() => updateVendor()}
    >
      {children}
    </Button>
  );
};
