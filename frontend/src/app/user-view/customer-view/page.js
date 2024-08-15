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
        <Container
            sx={{
                // backgroundColor: "#2b461c",
                paddingInline: 5,
                paddingBottom: 5,
                paddingTop: 2,
                width: "100%",
                borderRadius: 5,
            }}
        >
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

                <Link href="/user-view/customer-view/referral">
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
                {viewingFavorites ? (
                    <Button
                        onClick={() => setViewingFavorites(false)}
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
                ) : (
                    <IconButton
                        aria-label="add to favorites"
                        sx={{
                            color: "red",
                            "&:hover": {
                                color: "pink", // color on hover
                            },
                        }}
                        onClick={() => setViewingFavorites(!viewingFavorites)}
                    >
                        <FavoriteIcon
                            sx={{
                                fontSize: 40,
                            }}
                        />
                    </IconButton>
                )}
            </Box>
            {viewingFavorites ? (
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
                                        <Typography variant="body1">
                                            {vendor}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            ) : (
                <Container>
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
                                backgroundColor: "#F3F695",
                                width: "40%",
                                borderRadius: 2,
                                height: "40px", // Adjust height as needed
                            }}
                            InputProps={{
                                sx: {
                                    height: "100%", // Ensure input field fills the full height
                                    padding: "0 14px", // Adjust padding as needed
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    lineHeight: "1em", // Adjust line height for the label
                                    transform: "translate(14px, 10px) scale(1)", // Adjust label position
                                },
                            }}
                        />
                        <TextField
                            label="Search Vendors"
                            variant="outlined"
                            value={vendorSearchQuery}
                            onChange={handleVendorSearchQueryChange}
                            sx={{
                                backgroundColor: "#F3F695",
                                width: "40%",
                                borderRadius: 2,
                                height: "40px", // Adjust height as needed
                            }}
                            InputProps={{
                                sx: {
                                    height: "100%", // Ensure input field fills the full height
                                    padding: "0 14px", // Adjust padding as needed
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    lineHeight: "1em", // Adjust line height for the label
                                    transform: "translate(14px, 10px) scale(1)", // Adjust label position
                                },
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h8" sx={{ color: "#F3F695" }}>
                                Filter by distance
                            </Typography>
                            <Slider
                                aria-label="Distance(km)"
                                defaultValue={10}
                                onChange={handleDistanceChange}
                                valueLabelDisplay="auto"
                                shiftStep={30}
                                step={5}
                                marks
                                min={0}
                                max={50}
                                sx={{
                                    width: 150,
                                    marginInline: 1,
                                    color: "#F3F695", // Sets the slider's color to yellow
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "#F3F695", // Thumb color
                                        width: 15,
                                        height: 15,
                                    },
                                    "& .MuiSlider-track": {
                                        backgroundColor: "#F3F695", // Track color
                                    },
                                    "& .MuiSlider-rail": {
                                        color: "#F3F695", // Rail color
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                    <Grid
                        container
                        spacing={2}
                        sx={{ paddingInline: 5, paddingTop: 2 }}
                    >
                        {filteredVendorResults.map((vendor, index) => (
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
                                        <Typography variant="body1">
                                            {vendor}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
        </Container>
    );
}
