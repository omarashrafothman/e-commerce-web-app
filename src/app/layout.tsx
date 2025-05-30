import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../lib/fontawesome";


import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Store | Elevate Your Shopping Experience",
  description: "Discover premium quality products, exclusive collections, and a seamless shopping experience. Shop fashion, electronics, home essentials, and more – all in one place.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
