"use client";

import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useSignIn } from "@/features/users";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";

interface Props {}

export function LoginForm(props: Props) {
  const { mutate: signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length > 6;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password must be at least 6 characters long");
      return;
    }
    // Create a FormData object and append the fields
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
  
    // Pass the FormData object instead of a plain object
    signIn(formData);
  };

  return (
    <>
      <Grid container spacing={2} position={"relative"}>
        <Grid item xs={12} md={6} position={"relative"}>
          <form action={signIn} style={{ height: "100%" }} onSubmit={handleSubmit}>
            <FormControl
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={"bold"}
                color={"var(--darkgreen)"}
                position={"relative"}
                marginBottom={"1rem"}
              >
                Sign In
              </Typography>
              <Box>
                <FormLabel htmlFor={"email"}>Enter Email</FormLabel>
                <TextField
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  size="small"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor={"password"}>Enter password</FormLabel>
                <TextField
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  fullWidth
                  size="small"
                  sx={{ marginBottom: "1rem" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <CustomButton text="Sign In" buttonType="submit" size="medium" />
            </FormControl>
          </form>
        </Grid>
        <Grid item xs={12} md={6} position={"relative"} height={"100vh"}>
          <Image
            src="/login.png"
            alt="Street Scout"
            fill={true}
            sizes="100vw"
            className="w-auto h-auto z-0 relative"
            style={{ objectFit: "cover", objectPosition: "20% 50%" }}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
}
