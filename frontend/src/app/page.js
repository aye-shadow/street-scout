import {Box, Grid, Stack, Typography} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FontProvider from "@/theme/fontProvider";
import CustomButton from "@/components/ui/CustomButton";
import BoldWord from "@/components/ui/BoldWord";
import {LocationAdornment, LocationSearchBar} from "@/features/location";

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
        padding={3}
      >
        <Image
          src="/landing.jpg"
          sizes="100vw"
          alt="Street Scout"
          fill={true}
          className="w-auto h-auto z-0 relative"
          style={{ objectFit: "cover", objectPosition: "85% 50%" }}
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
          startAdornComp={
            <LocationAdornment sx={{ color: "rgb(var(--lightergreen))" }} />
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
      <Grid container spacing={3} position={"relative"} marginTop={1}>
        {localFoodVendors.map((vendor, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            gap={6}
            position={"relative"}
          >
            <Link href="#">
              <Stack direction="column" spacing={1}>
                <Box
                  overflow={"hidden"}
                  width={"100%"}
                  height={200}
                  position={"relative"}
                  sx={{
                    ":hover": { transform: "scale(1.05)" }, // Corrected from "&hover" to ":hover"
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  <Image
                    src={vendor.imageURL}
                    alt="Street Scout"
                    fill={true}
                    sizes="100vw"
                    className="w-auto h-auto z-0 relative"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={"bold"}>
                  {vendor.name}
                </Typography>
                <Typography variant="body2">{vendor.description}</Typography>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
