import BigImage from "@/components/ui/BigImage";
import CustomButton from "@/components/ui/CustomButton";
import FontProvider from "@/theme/fontProvider";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <BigImage imageUrl={"/not-found.jpg"}>
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
          404 Page Not Found
        </Typography>     
      </FontProvider>
      <Link href='/'>
        <CustomButton text="Back to Home" size={15} />
      </Link>
    </BigImage>
  );
}
