import {AllVendors, CreateVendorForm} from "@/features/vendor";
import {Add} from "@mui/icons-material";
import {ShowModalButton} from "@/features/modal";
import React from "react";

interface Props {}

export default function VendorsPage(props: Props) {
  return(
    <>
      <ShowModalButton
        text={"Add Vendor"}
        startIcon={<Add />}
      >
        <CreateVendorForm />
      </ShowModalButton>
      <AllVendors />
    </>
  )
};
