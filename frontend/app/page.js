import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import FontProvider from "./theme/fontProvider";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "./components/ui/CustomButton";
import SearchBar from "./components/ui/SearchBar";
import BoldWord from "./components/ui/BoldWord";

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
      <Box
        width="100%"
        height="100vh"
        position={"relative"}
        marginBottom={10}
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
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%)",
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
      <FontProvider>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          position={"relative"}
          marginBottom={3}
          color={"var(--darkgreen)"}
        >
          Why choose Street Scout?
        </Typography>
        <Typography variant="body1" position={"relative"} marginBottom={3}>
          Street Scout is a platform that connects{" "}
          <BoldWord text="local food vendors" /> that you can't normally find on
          Google Maps with customers in their area. We provide a platform for
          vendors to list their products and for customers to find the best
          local food vendors in their area.
        </Typography>
        <Typography position={"relaitve"} marginBottom={6}>
          Whether you're looking for a <BoldWord text="quick snack" /> on the
          way home for college, or just craving some{" "}
          <BoldWord text="spicy street food" /> on a weekend, we have you
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
      <Grid container spacing={2} position={"relative"} marginTop={1}>
        {localFoodVendors.map((vendor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Image
              src={vendor.imageURL}
              alt="Street Scout"
              width={300}
              height={200}
            />
            <Typography variant="h6">{vendor.name}</Typography>
            <Typography variant="body2">{vendor.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
