import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Kanwarnoor",
  description: "Personal website of Kanwarnoor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-black text-white antialiased`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
