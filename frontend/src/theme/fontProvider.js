"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

// Create a theme with Material-UI
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: manrope.style.fontFamily, // Use the Manrope font family
      textTransform: "none",
    },
  },
});

export default function FontProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
