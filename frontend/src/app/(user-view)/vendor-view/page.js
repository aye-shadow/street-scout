import React from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";
import { auth } from "@/features/lib/auth";
import { redirect } from "next/navigation";
import { VendorNameInput } from "@/features/vendor";
import CustomButton from "@/components/ui/CustomButton";
import { LocationAdornment } from "@/features/location";

export default async function VendorView() {
  const session = await auth();

  // if (!session) redirect("/signin");
  // if (session.user?.role !== "VENDOR") redirect("/user-view/customer-view");

  return (
    <Grid container spacing={4} sx={{ px: 4 }}>
      {/* Left Column */}
      <Grid item xs={12} md={6} sx={{ paddingRight: 5 }}>
        <Box sx={{ mb: 4, borderRadius: 4 }}>
          <TextField
            value=''
            fullWidth
            label="Location"
            sx={{
              "& .MuiInputBase-input": { color: "black" },
              "& .MuiInputLabel-root": { color: "black" },
              borderRadius: 4,
            }}
            InputProps={{
              startAdornment: (
                <LocationAdornment />
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{ color: "var(--darkgreen)", mb: 1 }}
          >
            Name
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Enter the name of your business here. Keep it short and simple.
          </Typography>
          <VendorNameInput
            fullWidth
            sx={{
              "& .MuiInputBase-input": { color: "black" },
              borderRadius: 4,
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{ color: "var(--darkgreen)", mb: 1 }}
          >
            Upload menu
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Enter items and their prices manually or upload a photo of a
            physical menu card. When you upload a photo of a physical menu card,
            our AI does its magic and autogenerates the menu items with their
            prices for you!
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <CustomButton text="Manual" />
            <CustomButton text="Upload a Photo" />
          </Box>
        </Box>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6} sx={{ paddingLeft: 5 }}>
        <Box>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{ color: "var(--darkgreen)", mb: 2 }}
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
            <CustomButton text="Register Business" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
