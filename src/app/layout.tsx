import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Transition from "@/components/Transition";
import { RouteProvider } from "@/context/routeContext";
// import Player from "@/components/Player";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kanwarnoor",
  description: "Personal website of Kanwarnoor",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  text-white antialiased bg-black`}>
        <RouteProvider>
          {/* <Navbar /> */}
          <Loader />
          <Transition />
          <Navbar />
          {/* <Player/> */}

          {children}
        </RouteProvider>
      </body>
    </html>
  );
}
