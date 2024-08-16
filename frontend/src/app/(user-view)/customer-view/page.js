"use client";
import {
  Box,
  Stack,
  TextField,
  Card,
  CardMedia,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CustomerPage() {
  const [vendors, setVendors] = useState([
    "Momo Hut",
    "Pizza Place",
    "KFC",
    "McD",
    "Domino's",
    "Toscanos",
    "Hopshaus",
    "in-n-out",
  ]);

  // Search functionality for Location
  const [location, setLocation] = useState("");

  // Function to handle location input change
  const handleLocationSearchChange = (e) => {
    setLocation(e.target.value);
  };

  // Search functionality for Vendor
  const [vendorSearchQuery, setVendorSearchQuery] = useState("");

  // Function to handle search input change
  const handleVendorSearchQueryChange = (e) => {
    setVendorSearchQuery(e.target.value);
  };
  const filteredVendorResults = vendors.filter((vendor) =>
    vendor.toLowerCase().includes(vendorSearchQuery.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
          paddingInline: 5,
        }}
      >
        <TextField
          label="Search Location"
          value={location}
          onChange={handleLocationSearchChange}
          variant="outlined"
          sx={{
            width: "40%",
            borderRadius: 2,
          }}
        />
        <TextField
          label="Search Vendors"
          variant="outlined"
          value={vendorSearchQuery}
          onChange={handleVendorSearchQueryChange}
          sx={{
            width: "40%",
            borderRadius: 2,
          }}
        />
      </Box>
      <Grid container spacing={2} sx={{ paddingInline: 5, paddingTop: 2 }} marginBottom={'3rem'}>
        {filteredVendorResults.map((vendor, index) => (
          <Grid item xs={4} key={index}>
            <Box
              sx={{
                height: 150,
                backgroundColor: "rgba(var(--lightergreen), 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">{vendor}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
