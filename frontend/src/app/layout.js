import { Manrope } from "next/font/google";
import "./globals.css";
import {ReactQueryProvider} from "@/features/utils";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Street Scout",
  description: "by Devin, Satyam, Ayesha, and Megan for the Boost Hacks II Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
