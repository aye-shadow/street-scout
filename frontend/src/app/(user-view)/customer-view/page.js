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

    // Handle location fetching
    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(latitude, longitude);
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

    useEffect(() => {
        // Define an async function to fetch data
        const fetchVendors = async () => {
            //TODO mention full request bodies with method (GET, POST, etc)
            try {
                const response = await fetch(
                    "http://localhost:8080/api/vendors"
                );

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log("resonse successful");
                const data = await JSON.parse(response);
                setVendors(data); // Update state with fetched data
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingAllVendors(false); // Set loading to false once the request is complete
            }
        };

        // Define an async function to fetch data
        const fetchFavouriteVendors = async () => {
            try {
                //TODO mention full request bodies with method (GET, POST, etc)
                const response = await fetch(
                    "http://localhost:8080/api/vendors" // TODO unsure what api call is to be made
                );

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log("resonse successful");
                const data = await JSON.parse(response);
                setFavourites(data); // Update state with fetched data
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingFavouriteVendors(false); // Set loading to false once the request is complete
            }
        };
        // TODO uncomment this and make sure the api call is working
        // fetchVendors(); // Call the function to fetch data
        // fetchFavouriteVendors();
    });

    useEffect(() => {
        // Define an async function to fetch data
        const fetchVendors = async () => {
            //TODO mention full request bodies with method (GET, POST, etc)
            //TODO use UseLocationStore here. Idk how to do it
            try {
                const response = await fetch(
                    `http://localhost:8080/api/search?q=query&lat=${latitude}&lng=${longitude}`
                );

                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log("resonse successful");
                const data = await JSON.parse(response);
                setVendors(data); // Update state with fetched data
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingAllVendors(false); // Set loading to false once the request is complete
            }
        };
    }, [distance]);

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
                <Link href="/customer-view/referral">
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
                            paddingInline: 5,
                            paddingBottom: 5,
                            paddingTop: 2,
                            width: "100%",
                            borderRadius: 5,
                            minHeight: 500,
                        }}
                    >
                        {favourites.map((vendor, index) => (
                            // {/*TODO ensure that key over here is the id of the vendor*/}
                            <Grid item xs={4} key={index}>
                                <Link href="/customer-view/vendor-detailed">
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
