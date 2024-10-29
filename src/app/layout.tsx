"use client"; // Ensure this is a client component
import React, { useEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import "./globals.css";
import Loading from "@/components/common/Loading"; 

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", 
  display: "swap", 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-poppins">
        {loading ? (
          <Loading />
        ) : (
          children // Render children only when loading is complete
        )}
      </body>
    </html>
  );
}
