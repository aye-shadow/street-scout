import { Box } from "@mui/material";
import Image from "next/image";

export default function BigImage({ imageUrl, children }) {
  return (
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
      padding={3}
    >
      <Image
        src={imageUrl}
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
      {children}
    </Box>
  );
}
