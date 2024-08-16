"use client";

import React, { ReactNode } from 'react';
import {Button, Link} from "@mui/material";

interface Props {}

export function VendorReferralButton (props: Props) {
  return (
    <Link href="/customer-view/referral">
      <Button
        variant="contained"
        sx={{
          bgcolor: "#A4E45C",
          color: "black",
          border: "2px solid #D9EF11",
          borderRadius: 5,
          "&:hover": {
            bgcolor: "#B2FF66", // Background color on hover
            color: "black", // Text color on hover
            border: "2px solid white",
          },
        }}
      >
        Refer a vendor
      </Button>
    </Link>
  );
};
