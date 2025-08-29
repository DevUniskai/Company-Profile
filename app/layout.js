// import Navbar from "@/components/common/Navbar";
// import "./globals.css";
// import { Providers } from "./provider";

// export const metadata = {
//   title: "Uniskai",
//   description: "Giving you the Best Travel Solution",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="agd-partner-manual-verification" />
//         <title>Uniskai</title>
//         <meta name="description" content="Giving you the Best Travel Solution" />
//       </head>
//       <body>
//         <Providers>
//           {/* <Navbar /> */}
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }

import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Providers } from "./provider";
import Script from "next/script";

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
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
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

