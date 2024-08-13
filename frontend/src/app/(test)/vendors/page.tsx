import {AllVendors} from "@/features/vendor";
import {Add} from "@mui/icons-material";
import {ShowModalButton} from "@/features/modal";
import React from "react";
import {RegisterForm} from "@/features/users";

interface Props {}

export default function VendorsPage(props: Props) {
  return(
    <>
      <ShowModalButton
        text={"Register User"}
        startIcon={<Add />}
      >
        <RegisterForm />
      </ShowModalButton>
      <AllVendors />
    </>
  )
};
