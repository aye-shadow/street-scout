"use client";

import React, {ReactNode, useState} from 'react';
import {MenuItemDetails, stringify} from "@/features/vendor";
import {
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

interface Props {
  menu: MenuItemDetails[];
  children?: ReactNode;
}

export function MenuTable ({ menu, children }: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const keys = menu && menu.length > 0
    ? Object.keys(menu[0]) as Array<keyof MenuItemDetails>
    : [];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%', mb: 2}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={keys.length} align={"center"}>
                <Typography variant="h2" component="div">Menu</Typography>
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
            {menu
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow hover key={index}>
                  {keys.map((key, index) => (
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
        rowsPerPage={rowsPerPage}
        page={page}
        count={menu.length}
        onPageChange={(e, page) => handlePageChange(page)}
        onRowsPerPageChange={e => handleChangeRowsPerPage(e)}
        component={"div"}
      />
    </Paper>
  );
};
