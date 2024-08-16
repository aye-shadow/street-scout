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
  Slider,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomButton from "@/components/ui/CustomButton";

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

  // Distance filter functionality
  const [distance, setDistance] = useState(10);

  // Get distance
  function handleDistanceChange(value) {
    setDistance(value);
  }

  // Favourites functionality
  const [favourites, setFavourites] = useState(["Toscanos", "KFC"]);

  // Conditional rendering done based on this
  const [viewingFavorites, setViewingFavorites] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 8,
          paddingBottom: 1,
        }}
      >
        {/* New Right-Aligned Button */}

        <Link href="/customer-view/referral">
          <CustomButton text="Refer a vendor" />
        </Link>
        <Button
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
          All Vendors
        </Button>
      </Box>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            // backgroundColor: "#2b461c",
            paddingInline: 5,
            paddingBottom: 5,
            paddingTop: 2,
            width: "100%",
            borderRadius: 5,
            minHeight: 500,
          }}
        >
          {favourites.map((vendor, index) => (
            <Grid item xs={4} key={index}>
              {/*TODO pass vendor name props to route to that page */}
              <Link href="/user-view/vendor-detailed">
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
                  <Typography variant="body1">{vendor}</Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
