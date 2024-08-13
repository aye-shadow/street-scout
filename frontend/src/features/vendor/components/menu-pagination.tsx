"use client";

import React, {useState} from 'react';
import {TablePagination} from "@mui/material";
import {useMenuTableStore, useVendor} from "@/features/vendor";

interface Props {
  vendorId: number;
}

export function MenuPagination ({ vendorId }: Props) {
  const [count, setCount] = useState(0)
  const page = useMenuTableStore(store => store.page)
  const rows = useMenuTableStore(store => store.rowsPerPage)
  const setPage = useMenuTableStore(store => store.setPage);
  const setRows = useMenuTableStore(store => store.setRowsPerPage);

  const {
    data,
  } = useVendor(vendorId)

  if (data?.menu) setCount(data.menu.length);

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 20]}
      rowsPerPage={rows}
      page={page}
      count={count}
      onPageChange={(e, page) => setPage(page)}
      onRowsPerPageChange={e => setRows(+e.target.value)}
      component={"div"}
    />
  );
};
