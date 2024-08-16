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
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {FavoriteVendors, VendorReferralButton} from "@/features/customers";

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

    const [loadingAllVendors, setLoadingAllVendors] = useState(true);
    const [loadingFavouriteVendors, setLoadingFavouriteVendors] =
        useState(true);

    // Search functionality for Location
    const [location, setLocation] = useState("");

    // Function to handle location input change
    const handleLocationSearchChange = (e) => {
        setLocation(e.target.value);
    };

    const vendorId = 0; // For testing purposes only

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

    const [sharedLocation, setSharedLocation] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    return (
        <Container
            sx={{
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
                <VendorReferralButton />
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
                <FavoriteVendors />
            ) : (
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 2,
                            paddingInline: 5,
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleGetLocation}
                            sx={{
                                bgcolor: "#F3F695",
                                color: "black",
                                border: "2px solid #D9EF11",
                                borderRadius: 5,
                                "&:hover": {
                                    bgcolor: "#B2FF66",
                                    color: "black",
                                    border: "2px solid white",
                                },
                            }}
                        >
                            Share Location
                        </Button>
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
                                width: "25%",
                            }}
                        >
                            <Typography variant="h8" sx={{ color: "green" }}>
                                Filter by distance
                            </Typography>
                            <Slider
                                aria-label="Distance (km)"
                                defaultValue={0}
                                onChange={handleDistanceChange}
                                valueLabelDisplay="auto"
                                step={5}
                                marks
                                min={0}
                                max={50}
                                sx={{
                                    width: "100%",
                                    color: "light-green", // Sets the slider's color to yellow
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "green", // Thumb color
                                        width: 15,
                                        height: 15,
                                    },
                                    "& .MuiSlider-track": {
                                        backgroundColor: "green", // Track color
                                    },
                                    "& .MuiSlider-rail": {
                                        color: "green", // Rail color
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
                                {/*TODO need to figure out how to pass vendor Id to next page */}
                                <Link
                                    href={`/customer-view/vendor-detailed?key=${vendorId}`}
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
