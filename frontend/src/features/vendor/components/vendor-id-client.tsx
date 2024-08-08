"use client";

import React, {ReactNode} from 'react';
import {useVendor} from "@/features/vendor";
import {Container, Typography} from "@mui/material";

interface Props {
  id: number
}

export function VendorIdClient({ id }: Props) {
  const {
    data: profile,
    isLoading
  } = useVendor(id)

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  console.log(profile)
  return (
    <Container>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
        Vendor: {profile.name}
      </Typography>
    </Container>
  );
};
