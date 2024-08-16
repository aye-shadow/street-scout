"use client";
// This is the detailed page for a vendor. When a user clicks on a vendor, they are led to this page, where a more detailed section is presented. Including photos, items on the menu, prices, and a location.
import * as React from "react";
import { Box, Typography, Grid, Paper, Link, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import {MenuItemDetails, useVendor} from "@/features/vendor";

const MenuCard = ({ params: { vendorId }}) => {
  const vendor = useVendor(vendorId);

  const menuItems = (vendor?.menu)
    ? vendor.menu
    : [
        { name: "Momo", price: 100 },
        { name: "Pizza", price: 200 },
        { name: "Bread", price: 200 },
        { name: "Pepsi", price: 60 },
    ];


    return (
        <Paper elevation={3}>
            <Box p={2}>
                <Typography variant="h6" align="center">
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
                        <React.Fragment key={item.name}>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    {item.name}
                                </Typography>
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
            {[...Array(6)].map((_, index) => (
                <Grid
                    item
                    xs={4}
                    key={index}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#F3F695",
                        margin: 2,
                    }}
                >
                    <Paper elevation={3} />
                    <p>image</p>
                </Grid>
            ))}
        </Grid>
    );
};

const VendorCard = () => {
    const [vendorId, setVendorId] = useState(0);

    useEffect(() => {
        // 1. Get Vendor ID from URL
        // Get query parameters from URL
        const query = new URLSearchParams(window.location.search);
        const key = query.get("key");

        // Fetch data or perform actions based on the key
        // TODO uncomment this and make call to api
        /*if (key) {
            // Example fetch call
            fetch(`/api/vendors/${key}`)
                .then((response) => response.json())
                .then((data) => setVendorId(data));
        }*/

        // TODO uncomment this and make call to api
        /* // 2. Retrieve details for vendor using the vendor id
        // Define an async function to fetch data
        const fetchUserProfile = async () => {
            //TODO mention full request bodies with method (GET, POST, etc)
            try {
                const response = await fetch(
                    `http://localhost:8080/vendors/${vendorId}`
                );

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log("response successful");
                const data = await JSON.parse(response);
                setUserData(data); // Update state with fetched data
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };*/
    }, []);

    // State to track if the icon is favorited
    const [isFavorite, setIsFavorite] = useState(false);

    // Toggle favorite state and handle click
    const handleClick = () => {
        setIsFavorite(!isFavorite);
        // Add vendor to favorites or other logic
        addVendorToFavourites("vendor");
    };

    // Add this vendor to customer's favourite
    function addVendorToFavourites(vendor) {
        // Perform api fetch
    }

    return (
        <Box
            sx={{
                // backgroundColor: "#2E402E",
                color: "#E8F0E8",
                padding: 2,
                borderRadius: 5,
                paddingBottom: 10,
                border: "2px solid #407F3B",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between", // Space between the buttons
                    alignItems: "center", // Align items vertically
                    position: "relative",
                }}
            >
                <Link href="/customer-view">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            bgcolor: "#F3F695",
                            color: "black",
                            border: "2px solid #D9EF11",
                            "&:hover": {
                                bgcolor: "#B2FF66",
                                color: "black",
                                border: "2px solid white",
                            },
                        }}
                    >
                        Back
                    </Button>
                </Link>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handleClick}
                    sx={{
                        color: isFavorite ? "#ff3399" : "default", // Change color when favorited
                        "&:hover": {
                            color: isFavorite ? "#ff3399" : "red", // Color on hover
                        },
                    }}
                >
                    <FavoriteIcon
                        sx={{
                            fontSize: 40,
                        }}
                    />
                </IconButton>
            </Box>
            <Typography variant="h5" align="center" sx={{ color: "black" }}>
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
                                color: "black",
                            }}
                        >
                            Gallery
                        </Typography>
                        <Gallery />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default VendorCard;
