import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./(components)/NavBar";
import GradientBlob from "./GradiantBlob";
import Footer from "./(components)/Footer";
import SplashScreen from "@/app/(components)/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganesh Unhale | Software Developer",
  description: "Software Developer skilled in React.js and Next.js for Frontend Development, Node.js and Express for backend—proficient in full-stack development with the MERN stack.",
  keywords: ["Software Developer","Frontend Developer","React", "Node.js","Next.js" ,"TypeScript", "Trading Systems", "Web Development","MERN Stack"],
  authors: [{ name: "Ganesh Unhale" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ganeshunhale.site/",
    siteName: "Ganesh Unhale Portfolio",
    title: "Ganesh Unhale | Software Developer",
    description: "Software Developer skilled in React.js and Next.js for Frontend Development, Node.js and Express for backend—proficient in full-stack development with the MERN stack.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ganesh Unhale Portfolio"
      }
    ]
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <GradientBlob/>
        <SplashScreen/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
