import React from "react";
import {
    Box,
    TextField,
    Typography,
    Button,
    Grid,
    Container,
} from "@mui/material";

export default function Home() {
    return (
        <Container
            maxWidth="lg"
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
                    <Box sx={{ mb: 4, borderRadius: 4 }}>
                        <TextField
                            fullWidth
                            label="Location"
                            variant="filled"
                            sx={{
                                bgcolor: "#F3F695",
                                "& .MuiInputBase-input": { color: "black" },
                                "& .MuiInputLabel-root": { color: "black" },
                                borderRadius: 4,
                            }}
                        />
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
                        <TextField
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
                                Upload a photo
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
        </Container>
    );
}
