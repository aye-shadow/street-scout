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
import { auth } from "@/features/lib/auth";
import { redirect } from "next/navigation";
import { VendorNameInput } from "@/features/vendor";

export default async function VendorView() {
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
                    setSharedLocation(
                        `Latitude: ${latitude}, Longitude: ${longitude}`
                    );
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

    const session = await auth();

    if (!session) redirect("/signin");
    if (session.user?.role !== "VENDOR") redirect("/user-view/customer-view");

    return (
        <Container
            // maxWidth="lg"
            sx={{
                bgcolor: "#2b461c",
                minHeight: "100vh",
                py: 6,
                borderRadius: 5,
            }}
        >
            <Grid container spacing={4} sx={{ px: 4 }}>
                {/* Left Column */}
                <Grid item xs={12} md={6} sx={{ paddingRight: 5 }}>
                    <Box
                        // maxWidth="sm"
                        sx={{
                            color: "white",
                            paddingBottom: 4,
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Enter Your Location
                        </Typography>

                        <RadioGroup
                            value={locationOption}
                            onChange={(e) => setLocationOption(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        >
                            <FormControlLabel
                                value="manual"
                                control={<Radio sx={{ color: "#F3F695" }} />}
                                label="Enter location manually"
                            />
                            <FormControlLabel
                                value="share"
                                control={<Radio sx={{ color: "#F3F695" }} />}
                                label="Use current location"
                            />
                        </RadioGroup>

                        {locationOption === "manual" ? (
                            <p>autocomplete component here</p>
                        ) : (
                            <Box>
                                {sharedLocation ? (
                                    <p>Shared Location!</p>
                                ) : (
                                    <Button
                                        variant="contained"
                                        onClick={handleLocationShare}
                                        sx={{
                                            bgcolor: "#F3F695",
                                            color: "black",
                                            mb: 2,
                                        }}
                                    >
                                        Share My Location
                                    </Button>
                                )}
                            </Box>
                        )}
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: "#F3F695", mb: 1 }}
                        >
                            Name
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#F3F695", mb: 1 }}
                        >
                            Enter the name of your business here. Keep it short
                            and simple.
                        </Typography>
                        <VendorNameInput
                            fullWidth
                            variant="filled"
                            sx={{
                                bgcolor: "#F3F695",
                                "& .MuiInputBase-input": { color: "black" },
                                borderRadius: 4,
                            }}
                        />
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: "#F3F695", mb: 1 }}
                        >
                            Upload menu
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#F3F695", mb: 1 }}
                        >
                            Enter items and their prices manually or upload a
                            photo of a physical menu card. When you upload a
                            photo of a physical menu card, our AI does its magic
                            and autogenerates the menu items with their prices
                            for you!
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: "#F3F695", color: "black" }}
                            >
                                Manual
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: "#F3F695", color: "black" }}
                            >
                                Upload photo
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={6} sx={{ paddingLeft: 5 }}>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ color: "#F3F695", mb: 2 }}
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
                            <Button
                                variant="contained"
                                sx={{ bgcolor: "#F3F695", color: "black" }}
                            >
                                Upload
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link href="/user-view/vendor-view/vendor-detailed">
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#F3F695",
                            color: "black",
                        }}
                    >
                        Ready to start serving!
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
