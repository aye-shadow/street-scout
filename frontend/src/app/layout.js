import {Manrope} from "next/font/google";
import {Box, Container} from "@mui/material";
import "../theme/globals.css";
import NavBar from "@/components/Navbar";
import Providers from "@/app/providers";
import {BaseModal} from "@/features/modal";
import React from "react";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Street Scout",
  description: "by MADS & Co. for the Boost Hacks II Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} relative`} style={{padding: '1.5rem'}}>
        <Providers>
          <Container
            disableGutters
            sx={{
              boxShadow: 3,
              backgroundColor: "rgb(var(--foreground))",
              position: "relative",
              borderRadius: "0.5rem",
              paddingBottom: '2rem',
            }}
          >
            <NavBar />
            <BaseModal />
            <Box px={3}>{children}</Box>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
