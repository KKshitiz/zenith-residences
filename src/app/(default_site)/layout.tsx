import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from "antd";
import "rc-slider/assets/index.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "../globals.css";
import { openSans } from "../lib/fonts";
import { websiteMetadata, websiteViewport } from "../lib/metadata";
import Overlay from "./components/Overlay";
import PublicAreaCarousel from "./components/PublicAreaCarousel";

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
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#ebebeb",
                colorText: "#F1EDDD",
                colorTextDisabled: "#7d7d7d",
                colorBgContainer: "#1d2a28",
                colorBorder: "#F1EDDD",
                colorBgElevated: "#1d2a28",
                // colorBgContainerDisabled: "#7d7d7d",
                colorPrimaryBorder: "#F1EDDD",
              },
              components: {
                Dropdown: {
                  colorWhite: "#1d2a28",
                },
                Button: {
                  defaultBorderColor: "transparent",
                  colorBgContainerDisabled: "white",
                },
                Card: {
                  // colorBorder: "transparent",
                },
              },
            }}
          >
            {children}
            <Overlay />
            <PublicAreaCarousel />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
