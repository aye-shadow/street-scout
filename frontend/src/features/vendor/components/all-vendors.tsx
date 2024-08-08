"use client";

import React, {ReactNode, useState} from 'react';
import {useAllVendors, VendorProfile} from "@/features/vendor";
import {DataTable} from "@/components/data-table";
import {useRouter} from "next/navigation";

interface Props {
  children?: ReactNode;

}

export function AllVendors ({}: Props) {
  const router = useRouter();
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

  function handleRowClick(vendor: VendorProfile) {
    router.push("/test/vendors/" + vendor.id);
  }

  return (
    <DataTable
      title={"Vendors"}
      data={vendors}
      totalPages={totalPages}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      onRowClick={(vendor) => {
        router.push("/test/vendor/" + vendor.id)
      }}
    />
  )
};
