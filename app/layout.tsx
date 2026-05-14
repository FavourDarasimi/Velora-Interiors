import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { LoadingWrapper, PageTransition } from "@/components/LoadingScreen";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veylora Interiors — Luxury Interior Design",
  description:
    "Award-winning interior design studio specializing in luxury residential and commercial spaces. Timeless elegance, modern minimalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LoadingWrapper>
          <Navbar />
          <main className="flex-1 flex flex-col">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </LoadingWrapper>
        <ScrollToTop />
      </body>
    </html>
  );
}
