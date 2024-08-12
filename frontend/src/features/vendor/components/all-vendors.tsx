"use client";

import React, {ReactNode, useState} from 'react';
import {CreateVendorForm, useAllVendors, VendorProfile} from "@/features/vendor";
import {VendorTable} from "@/features/vendor/components/vendor-table";
import {useRouter} from "next/navigation";
import {ShowModalButton} from "@/features/modal";
import {Add} from "@mui/icons-material";

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
    return <VendorTable
      title={"Vendors"}
      data={[]}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
    />
  }

  if (isError) {
    return <VendorTable
      title={"Vendors"}
      data={[]}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
    />
  }

  const {
    vendors,
  } = data;

  return (
    <>
      <ShowModalButton
        text={"Add Vendor"}
        startIcon={<Add />}
      >
        <CreateVendorForm />
      </ShowModalButton>

      <VendorTable
        title={"Vendors"}
        data={vendors}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        onRowClick={(vendor) => {
          router.push("/test/vendor/" + vendor.id)
        }}
      />
    </>
  )
};
