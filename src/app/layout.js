import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

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

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
