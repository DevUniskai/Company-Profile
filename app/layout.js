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
      <body>
        <Providers>
          {/* <Navbar /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
