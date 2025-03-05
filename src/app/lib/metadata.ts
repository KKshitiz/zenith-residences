import type { Metadata, Viewport } from "next";

export const websiteViewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width",
};

export const websiteMetadata: Metadata = {
  metadataBase: new URL(
    "https://leven-residences-git-main-kshitiz-kamals-projects.vercel.app"
  ),
  title: "Zenith Residences",
  description: "A venture by Zenith Development Co.",
  openGraph: {
    title: "Zenith Residences",
    description: "A venture by Zenith Development Co.",
    siteName: "Zenith Residences",
    url: "https://levenresidences.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leven Residences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leven Residences",
    description: "A venture by Metrical Development",
    creator: "@yourhandle",
    images: ["/images/twitter-image.png"],
  },
};
