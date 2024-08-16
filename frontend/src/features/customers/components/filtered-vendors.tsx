"use client";

import React from 'react';
import {Box, Grid, Link, Typography} from "@mui/material";
import {useVendorSearchStore} from "@/features/search";

interface Props {}

export function FilteredVendors (props: Props) {
  const filteredVendorResults = useVendorSearchStore(state => state.filteredVendors);
  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingInline: 5, paddingTop: 2 }}
    >
      {filteredVendorResults.map((vendor, index) => (
        <Grid item xs={4} key={index}>
          {/*TODO need to figure out how to pass vendor Id to next page */}
          <Link
            href={`/customer-view/vendor-detailed/${vendor.id}`}
          >
            {/* <Link href={`customer-view/vendor-detailed`}> */}
            <Box
              sx={{
                height: 150,
                backgroundColor: "#F3F695",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">
                {vendor.name}
              </Typography>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
