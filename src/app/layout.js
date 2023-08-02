import "./globals.scss";
import localFont from "next/font/local";
import { Header } from "@/components/Header";

const tt_hoves = localFont({
  src: [
    {
      path: "../fonts/TTHoves-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/TTHoves-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TTHoves-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TTHoves-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Digital Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/src/app/favicon.svg" sizes="any" />
      </head>

      <body className={tt_hoves.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
