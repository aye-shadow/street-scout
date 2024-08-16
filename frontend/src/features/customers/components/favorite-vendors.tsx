"use client";

import React, { ReactNode } from 'react';
import {Box, Container, Grid, Link, Typography} from "@mui/material";

interface Props {}

export function FavoriteVendors (props: Props) {
  const favourites = [];
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          paddingInline: 5,
          paddingBottom: 5,
          paddingTop: 2,
          width: "100%",
          borderRadius: 5,
          minHeight: 500,
        }}
      >
        {favourites.map((vendor, index) => (
          // {/*TODO ensure that key over here is the id of the vendor*/}
          <Grid item xs={4} key={index}>
            <Link href="/customer-view/vendor-detailed">
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
                  {vendor}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
