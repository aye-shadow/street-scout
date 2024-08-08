"use client";

import React, {ReactNode} from 'react';
import {MenuModal, MenuTable, useVendor} from "@/features/vendor";
import {Container, Typography} from "@mui/material";
import {DataTable} from "@/components/data-table";

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
      <Typography variant="h1" component="div" align={"center"}>
        {profile.name}
      </Typography>
      <MenuModal vendor={profile} />
      <MenuTable menu={profile.menu} />
    </Container>
  );
};
