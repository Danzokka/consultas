import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Header from "@/components/Header";

const geistSans = GeistSans

export const metadata: Metadata = {
  title: "Consultas",
  description: "Aplicativo de Consultas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <div className="md:px-20">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
