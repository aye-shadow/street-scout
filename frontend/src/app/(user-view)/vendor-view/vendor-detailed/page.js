"use client";
// This is the detailed page for a vendor. When a user clicks on a vendor, they are led to this page, where a more detailed section is presented. Including photos, items on the menu, prices, and a location.
import * as React from "react";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";

const MenuCard = () => {
  const menuItems = [
    { item: "Momo", price: 100 },
    { item: "Pizza", price: 200 },
    { item: "Bread", price: 200 },
    { item: "Pepsi", price: 60 },
  ];

  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Typography
          variant="h6"
          align="center"
          color={"var(--darkgreen)"}
          fontWeight={"bold"}
        >
          Menu
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body1">Item</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" align="right">
              Price
            </Typography>
          </Grid>
          {menuItems.map((item) => (
            <React.Fragment key={item.item}>
              <Grid item xs={6}>
                <Typography variant="body2">{item.item}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" align="right">
                  {item.price}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

const Gallery = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center", // Centers the content horizontally
        alignItems: "center",
      }}
    >
      {[...Array(4)].map((_, index) => (
        <Grid
          item
          xs={4}
          key={index}
          sx={{
            bgcolor: "#e0e0e0",
            aspectRatio: "1",
            borderRadius: 1,
            margin: 1,
          }}
        />
      ))}
    </Grid>
  );
};

const VendorCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between the buttons
          alignItems: "center", // Align items vertically
          position: "relative",
        }}
      >
        <Link href="/vendor-view">
          <CustomButton text="Edit Info" />
        </Link>
      </Box>
      <Typography
        variant="h5"
        align="center"
        color={"var(--darkgreen)"}
        fontWeight={"bold"}
      >
        Vendor Name
      </Typography>
      <Typography
        variant="body1"
        align="center"
        paddingBottom={5}
        sx={{ color: "black" }}
      >
        Location: xyz
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid white",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center", // Centers the content horizontally
              alignItems: "center", // Centers the content vertically
            }}
          >
            <MenuCard />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center", // Centers the content horizontally
                alignItems: "center",
                padding: 2,
              }}
              color={"var(--darkgreen)"}
              fontWeight={"bold"}
            >
              Gallery
            </Typography>
            <Gallery />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default VendorCard;
