import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FontProvider from "@/theme/fontProvider";
import CustomButton from "@/components/ui/CustomButton";
import BoldWord from "@/components/ui/BoldWord";
import BigImage from "@/components/ui/BigImage";
import { LocationAdornment, LocationSearchBar } from "@/features/location";
import {TopVendors} from "@/features/vendor";

export default function Home() {
  const localFoodVendors = [
    {
      name: "Spice Delight",
      description: "Tasty Indian dishes, from curries to biryanis.",
      imageURL: "/indian.jpg",
    },
    {
      name: "Arabian Nights",
      description: "Authentic Middle Eastern eats, kebabs to baklavas.",
      imageURL: "/arabic.jpg",
    },
    {
      name: "Sweet Treats Bakery",
      description: "Fresh bakery goods, breads to cakes and pastries.",
      imageURL: "/bakery.jpg",
    },
  ];

  return (
    <>
      <BigImage imageUrl={"/landing.jpg"}>
        <FontProvider>
          <Typography
            fontSize={"250%"}
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
        <LocationSearchBar
          fontSize={15}
          bgColor="white"
          placeholder={"Enter your location"}
          startAdornment={
            <LocationAdornment sx={{ color: "rgb(var(--lightergreen))" }} />
          }
          endAdornment={<CustomButton text="Find Vendors" size={15} />}
        />
      </BigImage>
      <FontProvider>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          position={"relative"}
          marginBottom={3}
          color={"var(--darkgreen)"}
          marginTop={4}
        >
          Why choose Street Scout?
        </Typography>
        <Typography variant="body1" position={"relative"} marginBottom={3}>
          Street Scout is a platform that connects{" "}
          <BoldWord>local food vendors</BoldWord> that you can't normally find
          on Google Maps with customers in their area. We provide a platform for
          vendors to list their products and for customers to find the best
          local food vendors in their area.
        </Typography>
        <Typography position={"relaitve"} marginBottom={6}>
          Whether you're looking for a <BoldWord>quick snack</BoldWord> on the
          way home for college, or just craving some{" "}
          <BoldWord>spicy street food</BoldWord> on a weekend, we have you
          covered!
        </Typography>
        <Typography
          variant="h5"
          color={"var(--darkgreen)"}
          fontWeight={"bold"}
          position={"relative"}
          marginBottom={2}
        >
          Start Exploring!
        </Typography>
        <Typography variant="h7" color={"var(--darkgreen)"} fontWeight={"bold"}>
          Our Featured Vendors of the Month:
        </Typography>
      </FontProvider>
      <TopVendors />
    </>
  );
}
