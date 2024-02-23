"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Header, Footer, Breadcrumb } from "@/components";
import React from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const path = usePathname();
  // console.log(path)

  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className="root min-h-[75vh]">
          <Breadcrumb path={path}/>

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
