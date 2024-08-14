import React from "react";
import Image from "next/image";
import { Box, Link, Typography } from "@mui/material";
import FontProvider from "../theme/fontProvider";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "./ui/CustomButton";
import {SearchBar} from "@/features/search";

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
      position={"relative"}
      mb={3}
      sx={{ color: "var(--darkgreen)" }}
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
        <Typography variant="h7" sx={{ fontWeight: "bold" }}>
          Street Scout
        </Typography>
      </Link>
      <Box display={"flex"} gap={2}>
        <FontProvider>
          <SearchBar
            size={"small"}
            startAdornComp={
              <SearchIcon sx={{ color: "rgb(var(--lightergreen))" }} />
            }
          />
          <Link href="/signin" color={"inherit"}>
            <CustomButton text={'Sign In'} />
          </Link>
        </FontProvider>
      </Box>
    </Box>
  );
}
