import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "Kanwarnoor",
  description: "Kanwarnoor's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gabarito.variable} ${gabarito.variable} antialiased dark:bg-neutral-900 dark:text-white bg-white text-black animate-all duration-300`}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
