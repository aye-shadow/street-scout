import React from "react";
import Image from "next/image";
import { Box, InputAdornment, Link, TextField, Typography } from "@mui/material";
import FontProvider from "../theme/fontProvider";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "./ui/CustomButton";

export default function NavBar() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={1}
      py={2}
      px={3}
      borderBottom={"1px solid rgb(var(--lightergreen))"}
      position={'relative'}
      mb={2}
      className="text-[var(--darkgreen)]"
    >
      <Link
        href="/"
        display={"flex"}
        alignItems={"center"}
        gap={2}
        underline="none"
        color={"inherit"}
      >
        <Image
          src="/logo.png"
          height={30}
          width={30}
          alt="Street Scout"
          className="w-auto h-auto"
          priority="true"
        />
        <Typography variant="h7" className="font-bold">
          Street Scout
        </Typography>
      </Link>
      <Box display={"flex"} gap={2}>
        <FontProvider>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(var(--lightergreen))", 
                },
              },
              "& .MuiInputBase-input": {
                fontSize: "12px", 
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{color: 'rgb(var(--lightergreen))'}} /> 
                </InputAdornment>
              ),
            }}
          />
          <Link href="../signin" color={"inherit"}>
            <CustomButton text={'Sign In'} />
          </Link>
        </FontProvider>
      </Box>
    </Box>
  );
}
