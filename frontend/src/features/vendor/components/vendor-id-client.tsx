"use client";

import React from 'react';
import {AddMenuItemForm, DeactivateVendorButton, MenuTable, useVendor} from "@/features/vendor";
import {Container, Typography} from "@mui/material";
import {ShowModalButton} from "@/features/modal";
import {Add} from "@mui/icons-material";

interface Props {
  id: number
}

export function VendorIdClient({ id }: Props) {
  const {
    data: vendor,
    isLoading
  } = useVendor(id)

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  console.log(vendor)
  return (
    <Container>
      <Typography variant="h1" component="div" align={"center"}>
        {vendor.name}
      </Typography>

      <ShowModalButton
        startIcon={<Add />}
        text={"Add to menu"}>
        <AddMenuItemForm vendor={vendor} />
      </ShowModalButton>

      <DeactivateVendorButton vendor={vendor} />

      <MenuTable menu={vendor.menu} />
    </Container>
  );
};
