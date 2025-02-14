"use client"; 
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Loading from "@/components/common/Loading";
import Footer from "@/components/Footer/Footer"; 
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/Header/Header";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = ""; 
    }, 3000);
    
    setMounted(true);
    document.body.style.overflow = "hidden"; 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ""; 
    };
  }, []);

  if (!mounted) return null; 
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`antialiased font-poppins flex flex-col min-h-screen ${loading ? "overflow-hidden" : "overflow-auto"}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {loading ? <Loading /> : (
            <>
          <Header />
              <main className="flex-1 overflow-auto flex-grow">{children}</main>
              <Footer /> 
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
