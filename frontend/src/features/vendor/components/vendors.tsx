"use client";

import React, {ReactNode, useState} from 'react';
import {stringify, useAllVendors, VendorProfile} from "@/features/vendor";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import {DataTable} from "@/components/data-table";

interface Props {
  children?: ReactNode;

}

export function Vendors ({}: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const {
    data,
    isLoading,
    isError
  } = useAllVendors({page, rowsPerPage})

  if (isLoading) {
    return <DataTable
      title={"Vendors Loading..."}
      data={[]}
      totalPages={0}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
    />
  }

  if (isError) {
    return <DataTable
      title={"Vendors [error]"}
      data={[]}
      totalPages={0}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
    />
  }

  const {
    vendors,
    totalPages
  } = data;

  return (
    <DataTable
      title={"Vendors"}
      data={vendors}
      totalPages={totalPages}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
    />)
};
