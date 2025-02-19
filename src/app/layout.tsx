import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar"; // Import the Navbar component

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BFA",
  description: "Building Futures Academy - Nonprofit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(outfit.className)}>
        <Navbar /> {/* Add Navbar here */}
        {children} {/* This will render the page content */}
      </body>
    </html>
  );
}
