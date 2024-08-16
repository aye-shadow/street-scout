"use client";

import React, { useState } from "react";
import { useRegisterUser, UserRegistration, UserRole } from "@/features/users";
import { useModalStore } from "@/features/modal";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";
import BoldWord from "@/components/ui/BoldWord";
import Link from "next/link";
import Image from "next/image";

interface Props {}

export function RegisterForm(props: Props) {
  const [role, setRole] = useState<UserRole>("VENDOR");

  const userMutation = useRegisterUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const userInfo: UserRegistration = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      password: formData.get("password") as string,
      role: formData.get("role") as UserRole,
    };

    console.log("⚡️Registering User", userInfo);
    userMutation.mutate(userInfo);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setRole(newAlignment as UserRole);
    }
  };

  return (
    <Grid container spacing={2} position={"relative"}>
      <Grid item xs={12} md={6} position={"relative"}>
        <form style={{ height: "100%" }} onSubmit={(e) => handleSubmit(e)}>
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
              Create An Account
            </Typography>

            <Box>
              <FormLabel htmlFor={"name"}>Enter Name</FormLabel>
              <TextField name={"name"} size="small" fullWidth />
            </Box>

            <Box>
              <FormLabel htmlFor={"password-confirm"}>
                Confirm password
              </FormLabel>
              <TextField
                id={"password-confirm"}
                name={"password-confirm"}
                type={"password"}
                size="small"
                fullWidth
              />
            </Box>

            <Box>
              <FormLabel htmlFor={"email"}>Enter Email</FormLabel>
              <TextField
                id={"email"}
                name={"email"}
                type={"email"}
                size="small"
                fullWidth
              />
            </Box>

            <Box marginBottom={"0.75rem"}>
              <FormLabel htmlFor={"password"}>Enter password</FormLabel>
              <TextField
                id={"password"}
                name={"password"}
                type={"password"}
                fullWidth
                size="small"
              />
            </Box>

            <ToggleButtonGroup
              id="user-role-select"
              value={role}
              size="small"
              exclusive
              onChange={handleAlignment}
              aria-label="Street Scout"
              fullWidth
              sx={{
                marginBottom: "0.75rem",
                "& .MuiToggleButton-root": {
                  color: "black", // Default text color
                  borderColor: "rgb(var(--lightergreen))", // Border color
                  "&.Mui-selected": {
                    color: "white", // Text color when selected
                    backgroundColor: "rgb(var(--lightergreen))", // Background color when selected
                    "&:hover": {
                      backgroundColor: "rgb(var(--lightergreen))", // Maintain selected background color on hover
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(var(--lightergreen), 0.08)", // Slightly transparent background on hover
                  },
                },
              }}
            >
              <ToggleButton value="CUSTOMER">Customer</ToggleButton>
              <ToggleButton value="VENDOR">Vendor</ToggleButton>
            </ToggleButtonGroup>

            <CustomButton text="Sign Up" buttonType="submit" size="14px" />
            <Divider textAlign="right" sx={{ fontSize: "10px" }}>
              Already have an account?{" "}
              <BoldWord>
                <Link href="/signin">Sign In</Link>
              </BoldWord>
            </Divider>
          </FormControl>
        </form>
      </Grid>
      <Grid item xs={12} md={6} position={"relative"} height={"100vh"}>
        <Image
          src="/signup.png"
          alt="Street Scout"
          fill={true}
          sizes="100vw"
          className="w-auto h-auto z-0 relative"
          style={{ objectFit: "cover", objectPosition: "80% 50%" }}
        ></Image>
      </Grid>
    </Grid>
  );
}
