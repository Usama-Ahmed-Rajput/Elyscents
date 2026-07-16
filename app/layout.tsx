"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/share-component/header/header";
import Footer from "@/share-component/footer/footer";
import { CartProvider } from "@/share-component/context/CartContext";
import { StructuredData } from "./structured-data";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Abrar Fragrances - Premium Perfumes",
  description: "Discover premium fragrances at Al Abrar. Shop authentic perfumes with exclusive collections and unbeatable prices. Free shipping on orders over Rs. 1000.",
  keywords: "fragrances, perfumes, Al Abrar, luxury scents, oud, perfume collections",
  authors: [{ name: "Al Abrar Fragrances" }],
  openGraph: {
    title: "Al Abrar Fragrances - Premium Perfumes",
    description: "Discover premium fragrances at Al Abrar. Shop authentic perfumes with exclusive collections.",
    url: "https://alabrar.com",
    siteName: "Al Abrar Fragrances",
    images: [
      {
        url: "/al-abrar-logo.png",
        width: 1200,
        height: 630,
        alt: "Al Abrar Fragrances Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Abrar Fragrances - Premium Perfumes",
    description: "Discover premium fragrances at Al Abrar",
    images: ["/al-abrar-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const hiddenNavbar = pathname === "/login"
  
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {!hiddenNavbar && <Header/>}
          {children}
          {!hiddenNavbar && <Footer/>}
        </CartProvider>
      </body>
    </html>
  );
}
