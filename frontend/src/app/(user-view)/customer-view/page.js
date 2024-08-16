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
import {
  FavoriteVendors,
  FilteredVendors,
  ShareLocationButton,
  VendorReferralButton,
  VendorSearchInput
} from "@/features/customers";
import {useGeolocation, useLocationStore, useNearbyVendors} from "@/features/location";

export default function CustomerPage() {
    const setDistance = useLocationStore(state => state.setRange)

    function handleDistanceChange(value) {
        setDistance(value);
    }

    // Conditional rendering done based on this
    const [viewingFavorites, setViewingFavorites] = useState(false);

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
                        <ShareLocationButton />
                        <VendorSearchInput />
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
                    <FilteredVendors />
                </Container>
            )}
        </Container>
    );
}
