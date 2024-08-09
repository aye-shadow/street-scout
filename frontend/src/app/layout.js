import { Box, Container } from "@mui/material";
import { Manrope } from "next/font/google";
import "../theme/globals.css";
import NavBar from "@/components/Navbar";
import Providers from "@/app/providers";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Street Scout",
  description:
    "by Devin, Satyam, Ayesha, and Megan for the Boost Hacks II Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} m-4 relative bg-[rgb(var(--background))]`}
      >
        <Providers>
          <Container
              className="bg-[rgb(var(--foreground))] rounded-lg pb-4"
              disableGutters
            >
              <NavBar />
              <Box px={3}>{children}</Box>
            </Container>
          </Providers>
      </body>
    </html>
  );
}
