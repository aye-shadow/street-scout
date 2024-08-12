import React, {ReactNode} from 'react';
import {stringify, VendorProfile} from "@/features/vendor";
import {
  Box,
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

interface Props<T extends {}> {
  title: string
  data?: T[],
  page?: number,
  rowsPerPage?: number,
  setPage?: (value: number) => void,
  setRowsPerPage?: (value: number) => void,
  onRowClick?: (item: T, e: React.MouseEvent<HTMLTableRowElement>) => void
}

export function VendorTable<T>(
  {
    title,
    data = [],
    page = 0,
    rowsPerPage = 5,
    setPage,
    setRowsPerPage,
    onRowClick,
  }: Props<T>
) {
  const keys = data && data.length > 0
    ? Object.keys(data[0]) as Array<keyof T>
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
                <Typography variant="h2" component="div">{title}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {keys.map((key, index) => (
                <TableCell key={String(key)} align="center">
                  {String(key).charAt(0).toUpperCase() + String(key).slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow hover key={index} onClick={e => onRowClick(item, e)}>
                {keys
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((key, index) => (
                  <TableCell key={String(key)} align={"center"}>
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
        count={data.length}
        onPageChange={(e, page) => handlePageChange(page)}
        onRowsPerPageChange={e => handleChangeRowsPerPage(e)}
        component={"div"}
      />
    </Paper>
  );
};
