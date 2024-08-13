"use client";

import React, {ReactNode} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableProps, TableRow, Typography} from "@mui/material";

interface Props<T> extends TableProps {
  columns: Array<keyof T>;
  header: string;
  children: ReactNode;
}

export function DataTable<T extends {}>({ columns, header, children, ...tableProps }: Props<T>) {
  return (
    <TableContainer>
      <Table {...tableProps}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={columns.length} align={"center"}>
              <Typography variant="h2" component="div">{header}</Typography>
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
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
