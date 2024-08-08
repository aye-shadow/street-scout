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
  data: T[],
  page: number,
  totalPages: number,
  rowsPerPage: number,
  setPage: (value: (((prevState: number) => number) | number)) => void,
  setRowsPerPage: (value: (((prevState: number) => number) | number)) => void,
  title: string
  onRowClick?: (item: T, e: React.MouseEvent<HTMLTableRowElement>) => void
}

export function DataTable<T>({data, page, totalPages, rowsPerPage, setPage, setRowsPerPage, title, onRowClick}: Props<T>) {

  const keys = data && data.length > 0
    ? Object.keys(data[0]) as Array<keyof VendorProfile>
    : [];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <Box sx={{width: '100%'}}>
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
                  <TableCell key={key} align="center">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow hover key={index} onClick={e => onRowClick(item, e)}>
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
          count={totalPages ?? 0}
          onPageChange={(e, page) => handlePageChange(page)}
          onRowsPerPageChange={e => handleChangeRowsPerPage(e)}
          component={"div"}
        />
      </Paper>
    </Box>
  );
};
