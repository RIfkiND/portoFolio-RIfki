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
  const [mounted, setMounted] = useState(false); // Ensures client & server match

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    setMounted(true); // Only allow rendering after mount
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null; // Prevent mismatches by rendering only on mount

  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-poppins flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {loading ? <Loading /> : (
            <>
                  <Header />
              <div className="flex-grow">{children}</div>
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
