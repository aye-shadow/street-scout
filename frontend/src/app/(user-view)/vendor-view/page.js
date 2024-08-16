"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
} from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";

export default function Home() {
  // Location functionality variables
  const [locationOption, setLocationOption] = useState("manual");
  const [manualLocation, setManualLocation] = useState("");
  const [sharedLocation, setSharedLocation] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // Manual Location Entry functionality

  // Name functionality variables
  const [name, setName] = useState("");

  const handleLocationShare = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSharedLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setLatitude(() => latitude);
          setLongitude(() => longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        marginBottom={2}
      >
        <Link href="./vendor-view/vendor-detailed">
          <CustomButton text="Ready to start serving!" />
        </Link>
      </Box>
      <Grid container spacing={4} sx={{ px: 4 }}>
        {/* Left Column */}
        <Grid item xs={12} md={6} sx={{ paddingRight: 5 }}>
          <Box
            // maxWidth="sm"
            sx={{
              paddingBottom: 4,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={"bold"}
              color={"var(--darkgreen)"}
            >
              Enter Your Location
            </Typography>

            <Box>
              {sharedLocation ? (
                <p>Shared Location!</p>
              ) : (
                <CustomButton
                  text="Share My Location"
                  onClick={handleLocationShare}
                />
              )}
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 1 }}
              color={"var(--darkgreen)"}
              fontWeight={"bold"}
            >
              Name
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Enter the name of your business here. Keep it short and simple.
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={{
                "& .MuiInputBase-input": { color: "black" },
              }}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 1 }}
              color={"var(--darkgreen)"}
              fontWeight={"bold"}
            >
              Upload menu
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Enter items and their prices manually or upload a photo of a
              physical menu card. When you upload a photo of a physical menu
              card, our AI does its magic and autogenerates the menu items with
              their prices for you!
            </Typography>
            <Link href="./vendor-view/camera">
              <CustomButton text="Upload Menu" />
            </Link>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6} sx={{ paddingLeft: 5 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
              color={"var(--darkgreen)"}
              fontWeight={"bold"}
            >
              Gallery
            </Typography>
            <Grid container spacing={2}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={4} key={index}>
                  <Box
                    sx={{
                      bgcolor: "#e0e0e0",
                      aspectRatio: "1",
                      borderRadius: 1,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
              }}
            >
              <CustomButton text="Add Photos" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
