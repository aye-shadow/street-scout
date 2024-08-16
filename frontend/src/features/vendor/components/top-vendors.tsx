"use client";

import React from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {useTopVendors} from "@/features/vendor";

interface Props {}

export function TopVendors (props: Props) {
  const { vendors } = useTopVendors();
  return (
    <Grid container spacing={3} position={"relative"} marginTop={1}>
      {vendors.map((vendor, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          gap={6}
          position={"relative"}
        >
          <Link href="#">
            <Stack direction="column" spacing={1}>
              <Box
                overflow={"hidden"}
                width={"100%"}
                height={200}
                position={"relative"}
                sx={{
                  ":hover": { transform: "scale(1.05)" }, // Corrected from "&hover" to ":hover"
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <Image
                  src={vendor.photoUrl}
                  alt="Street Scout"
                  fill={true}
                  sizes="100vw"
                  className="w-auto h-auto z-0 relative"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Box>
              <Typography variant="h6" fontWeight={"bold"}>
                {vendor.name}
              </Typography>
              <Typography variant="body2">{vendor.description}</Typography>
            </Stack>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
