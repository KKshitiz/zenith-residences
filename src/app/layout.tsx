import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "rc-slider/assets/index.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./globals.css";
import Overlay from "./ui/components/Overlay";
import PublicAreaCarousel from "./ui/components/PublicAreaCarousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-screen`}
      >
        {children}
        <Overlay />
        <PublicAreaCarousel />
      </body>
    </html>
  );
}
