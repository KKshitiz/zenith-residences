import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@ant-design/v5-patch-for-react-19';
import "rc-slider/assets/index.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./globals.css";
import { openSans } from "./lib/fonts";
import { websiteMetadata, websiteViewport } from "./lib/metadata";

export const metadata = websiteMetadata;

export const viewport = websiteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased relative`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
