"use client";

import React from 'react';
import {stringify, useMenuTableStore, useVendor} from "@/features/vendor";
import {TableCell, TableRow} from "@mui/material";
import {menuItemKeys} from "@/features/lib";

interface Props {
  vendorId: number;
}

export function MenuData ({ vendorId }: Props) {
  const page = useMenuTableStore(store => store.page)
  const rows = useMenuTableStore(store => store.rowsPerPage)
  const {
    data,
    isPending,
    isError,
    error
  } = useVendor(vendorId)

  if (isPending) return <>Loading...</>
  if (isError) return <>Error: {error.message}</>

  const { menu} = data
  console.log(data);
  return (
    <>
      {menu && menu
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
    </>
  );
};
