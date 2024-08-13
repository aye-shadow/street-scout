"use client";

import React from 'react';
import {Button, ButtonProps} from "@mui/material";
import {useDeactivateVendor, VendorProfile} from "@/features/vendor";
import {Delete} from "@mui/icons-material";

interface Props extends ButtonProps {
  vendorId: number;
}

export function DeactivateVendorButton ({ vendorId, ...rest }: Props) {
  const {
    mutate: deactivate
  } = useDeactivateVendor(vendorId);
  return (
    <Button
      startIcon={<Delete />}
      {...rest}
      onClick={() => deactivate()}
    >
      Deactivate vendor
    </Button>
  );
};
