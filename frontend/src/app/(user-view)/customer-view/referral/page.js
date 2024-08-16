"use client";
// pages/referral.js
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    IconButton,
    Grid,
    List,
    ListItem,
    Link,
    ListItemText,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ReferVendor() {
    const [vendorName, setVendorName] = useState("");
    const [location, setLocation] = useState("");
    const [menuItems, setMenuItems] = useState([{ itemName: "", price: "" }]);
    const [menuPhoto, setMenuPhoto] = useState(null);
    const [sharedLocation, setSharedLocation] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // Handle adding new menu item
    const handleAddMenuItem = () => {
        setMenuItems([...menuItems, { itemName: "", price: "" }]);
    };

    // Handle removing a menu item
    const handleRemoveMenuItem = (index) => {
        const updatedMenuItems = menuItems.filter((_, i) => i !== index);
        setMenuItems(updatedMenuItems);
    };

    // Handle updating menu item fields
    const handleMenuItemChange = (index, field, value) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index][field] = value;
        setMenuItems(updatedMenuItems);
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        setMenuPhoto(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data (e.g., send to an API or database)
        console.log({ vendorName, location, menuItems, menuPhoto });
    };

    // Handle location fetching
    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                    setSharedLocation(`Lat: ${latitude}, Lon: ${longitude}`);
                    // Optionally, you can convert lat/lon to a readable address using a geocoding API
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    setSharedLocation("Unable to retrieve location.");
                }
            );
        } else {
            setSharedLocation("Geolocation is not supported by this browser.");
        }
    };

    return (
        <Container sx={{ marginTop: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Link href="/user-view/customer-view">
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
            </Box>
            <Box
                maxWidth="sm"
                sx={{
                    margin: "auto",
                    padding: 2,
                    borderRadius: 5,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Refer a Vendor
                </Typography>
                <Box sx={{ paddingBottom: 10 }}>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ marginBottom: 2 }}>
                            <TextField
                                label="Vendor Name"
                                variant="outlined"
                                fullWidth
                                value={vendorName}
                                onChange={(e) => setVendorName(e.target.value)}
                                required
                            />
                        </Box>
                        <Box sx={{ marginBottom: 2, display: "flex", gap: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleGetLocation}
                                sx={{
                                    bgcolor: "#F3F695",
                                    color: "black",
                                    border: "2px solid #D9EF11",
                                    borderRadius: 5,
                                    height: "56px", // Match the text field height
                                    "&:hover": {
                                        bgcolor: "#B2FF66",
                                        color: "black",
                                        border: "2px solid white",
                                    },
                                }}
                            >
                                Share Location
                            </Button>
                        </Box>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ marginBottom: 0 }}
                        >
                            Menu Items
                        </Typography>
                        <List sx={{ marginBottom: 1 }}>
                            {menuItems.map((menuItem, index) => (
                                <ListItem
                                    key={index}
                                    sx={{ paddingLeft: 0, paddingRight: 0 }} // Remove default padding
                                >
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center" // Ensure items are centered vertically
                                    >
                                        <Grid item xs={5}>
                                            <TextField
                                                label="Item Name"
                                                variant="outlined"
                                                fullWidth
                                                value={menuItem.itemName}
                                                onChange={(e) =>
                                                    handleMenuItemChange(
                                                        index,
                                                        "itemName",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <TextField
                                                label="Price"
                                                variant="outlined"
                                                fullWidth
                                                value={menuItem.price}
                                                onChange={(e) =>
                                                    handleMenuItemChange(
                                                        index,
                                                        "price",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={2}
                                            sx={{ textAlign: "left" }}
                                        >
                                            <IconButton
                                                color="error"
                                                onClick={() =>
                                                    handleRemoveMenuItem(index)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>

                        <Button
                            variant="contained"
                            startIcon={<AddCircleIcon />}
                            onClick={handleAddMenuItem}
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
                            Add Another Item
                        </Button>
                        <Box sx={{ marginY: 2 }}>
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<PhotoCamera />}
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
                                Upload Menu Photo
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleFileUpload}
                                />
                            </Button>
                            {menuPhoto && (
                                <Typography
                                    variant="body2"
                                    sx={{ marginTop: 1 }}
                                >
                                    {menuPhoto.name}
                                </Typography>
                            )}
                        </Box>
                        <Link href="/user-view/customer-view">
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#96D78F",
                                    color: "black",
                                    border: "2px solid #A7EEA0",
                                    borderRadius: 5,
                                    "&:hover": {
                                        bgcolor: "#B2FF66",
                                        color: "black",
                                        border: "2px solid white",
                                    },
                                }}
                            >
                                Submit Referral
                            </Button>
                        </Link>
                    </form>
                </Box>
            </Box>
        </Container>
    );
}
