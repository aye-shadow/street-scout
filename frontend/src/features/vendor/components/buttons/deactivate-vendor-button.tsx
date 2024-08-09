"use client";

import React from 'react';
import {Button, ButtonProps} from "@mui/material";
import {useDeactivateVendor, VendorProfile} from "@/features/vendor";
import {Delete} from "@mui/icons-material";

interface Props extends ButtonProps {
  vendor: VendorProfile;
}

export function DeactivateVendorButton ({ vendor, ...rest }: Props) {
  const {
    mutate: deactivate
  } = useDeactivateVendor(vendor.id);
  return (
    <Button
      startIcon={<Delete />}
      {...rest}
      onClick={() => deactivate()}
    >
      Deactivate {vendor.name}
    </Button>
  );
};
