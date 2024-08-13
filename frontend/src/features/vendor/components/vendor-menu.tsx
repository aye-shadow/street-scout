"use client";

import React from 'react';
import {MenuItemDetails, stringify, useMenuTableStore, useVendor} from "@/features/vendor";
import {
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
import {extractKeys, menuItemKeys} from "@/features/lib";

interface Props {
  vendorId: number
}

const columns = extractKeys<MenuItemDetails>({
  id: null,
  name: null,
  description: null,
  price: null
});

export function VendorMenu({ vendorId }: Props) {
  const page = useMenuTableStore(store => store.page)
  const rows = useMenuTableStore(store => store.rowsPerPage)
  const setPage = useMenuTableStore(store => store.setPage);
  const setRows = useMenuTableStore(store => store.setRowsPerPage);

  const {
    data: vendor,
    isLoading
  } = useVendor(vendorId)

  if (isLoading) {
    return <Container>Loading...</Container>
  }

  console.log(vendor)

  return (
    <Container>
      <Typography variant="h1" component="div" align={"center"}>
        {vendor.name}
      </Typography>

      <TableContainer component={Paper} sx={{width: '100%', mb: 2}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={columns.length} align={"center"}>
                <Typography variant="h2" component="div">Menu</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((key, index) => {
                const k = String(key);
                return (
                  <TableCell key={k} align="center">
                    {k.charAt(0).toUpperCase() + k.slice(1)}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {vendor.menu && vendor.menu
              .slice(page * rows, page * rows + rows)
              .map((item, index) => (
                <TableRow hover key={index}>
                  {menuItemKeys.map((key, index) => (
                    <TableCell key={key} align={"center"}>
                      {stringify(item[key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        rowsPerPage={rows}
        page={page}
        count={vendor?.menu ? vendor.menu.length : 0}
        onPageChange={(e, page) => setPage(page)}
        onRowsPerPageChange={e => setRows(+e.target.value)}
        component={"div"}
      />
    </Container>
  );
};
