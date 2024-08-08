"use client";

import React, {ReactNode} from 'react';
import {stringify, useAllVendors, VendorProfile} from "@/features/vendor";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

interface Props {
  children?: ReactNode;

}

export function Vendors ({}: Props) {
  const {
    data,
    isLoading,
    isError
  } = useAllVendors()

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  if (isError) {
    return <Container>Error</Container>
  }


  const { vendors } = data;
  const keys = vendors && vendors.length > 0
    ? Object.keys(vendors[0]) as Array<keyof VendorProfile>
    : [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={keys.length} align={"center"}>
              <Typography variant="h2" component="div">Vendors</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            {keys.map((key, index) => (
              <TableCell key={key} align="center">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {vendors.map((vendor, index) => (
            <TableRow key={index}>
              {keys.map((key, index) => (
                <TableCell key={key} align={"center"}>
                  {stringify(vendor[key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
