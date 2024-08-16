"use client";
import * as React from "react";
import {
    Box,
    Card,
    CardContent,
    Avatar,
    Typography,
    Grid,
    Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect } from "react";

const UserProfile = () => {
    // Sample user data
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        id: "123456",
        role: "Customer",
    };

    const [userData, setUserData] = React.useState(user);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchUserProfile = async () => {
            //TODO mention full request bodies with method (GET, POST, etc)
            try {
                const response = await fetch(
                    "http://localhost:8080/api/customers/profile"
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
        };
    }, []);

    return (
        <Container sx={{ marginTop: 4, paddingBottom: 5 }}>
            <Card
                sx={{
                    maxWidth: 600,
                    margin: "auto",
                    padding: 2,
                    borderRadius: 5,
                    border: "2px solid #F3F695",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    bgcolor: "#96D78F",
                                    color: "black",
                                }}
                            >
                                <AccountCircleIcon sx={{ fontSize: 50 }} />
                            </Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h4" sx={{ color: "#2E402E" }}>
                                {user.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: "#6B6B6B" }}
                            >
                                {user.role}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box mt={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#2E402E",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Email:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#6B6B6B" }}
                                >
                                    {user.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#2E402E",
                                        fontWeight: "bold",
                                    }}
                                >
                                    User ID:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#6B6B6B" }}
                                >
                                    {user.id}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default UserProfile;
