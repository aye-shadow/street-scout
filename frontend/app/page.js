import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import FontProvider from "./theme/fontProvider";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "./components/ui/CustomButton";
import SearchBar from "./components/ui/SearchBar";

export default function Home() {
  return (
    <>
      <Box
        width="100%"
        height="100vh"
        position={"relative"}
        overflow={"hidden"}
        borderRadius={"10px"}
        display={"flex"}
        alignItems={"center"}
        gap={3}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Image
          src="/landing.jpg"
          sizes="100vw"
          alt="Street Scout"
          fill={true}
          className="w-auto h-auto z-0"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0)" // Start fully transparent
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%)",
            pointerEvents: "none", // Ensure clicks pass through the overlay
          }}
        />
        <FontProvider>
          <Typography
            variant="h2"
            color={"white"}
            position={"relative"}
            fontWeight={"bold"}
            textAlign={"center"}
            margin={"0 25%"}
            className="z-10"
          >
            Where Local Finds Meet Hungry Minds
          </Typography>
        </FontProvider>
        <SearchBar
          searchFontSize={15}
          bgColor="white"
          placeholderText={"Enter your location"}
          startAdornComp={
            <SearchIcon sx={{ color: "rgb(var(--lightergreen))" }} />
          }
          endAdornComp={<CustomButton text="Find Vendors" size={15} />}
        />
      </Box>
    </>
  );
}
