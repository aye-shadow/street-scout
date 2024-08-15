import { Manrope } from "next/font/google";
import { Box, Container } from "@mui/material";
import { shadows } from "@mui/system";
import "../theme/globals.css";
import NavBar from "@/components/Navbar";
import Providers from "@/app/providers";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "Street Scout",
    description: "by MADS & Co. for the Boost Hacks II Hackathon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.className} relative pb-4`}>
                <Providers>
                    <Container
                        disableGutters
                        sx={{
                            boxShadow: 3,
                            backgroundColor: "rgb(var(--foreground))",
                            position: "relative",
                            margin: "2.5rem",
                            borderRadius: "0.5rem",
                            width: "calc(100% - 5rem)",
                            paddingBottom: "1rem",
                        }}
                    >
                        <NavBar />
                        <Box px={3}>{children}</Box>
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
