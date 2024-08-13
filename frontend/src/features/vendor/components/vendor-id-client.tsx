"use client";

import React from 'react';
import {AddMenuItemForm, DeactivateVendorButton, DataTable, useVendor} from "@/features/vendor";
import {Container, Typography} from "@mui/material";
import {ShowModalButton} from "@/features/modal";
import {Add} from "@mui/icons-material";
import {CreateReviewForm} from "@/features/reviews";

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
    </Container>
  );
};
