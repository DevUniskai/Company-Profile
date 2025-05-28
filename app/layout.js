import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Providers } from "./provider";

export const metadata = {
  title: "Uniskai",
  description: "Giving you the Best Travel Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="agd-partner-manual-verification" />
        <title>Uniskai</title>
        <meta name="description" content="Giving you the Best Travel Solution" />
      </head>
      <body>
        <Providers>
          {/* <Navbar /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
