import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.domain),
  title: "Isaias Alvarez Vargas | Salesforce Developer",
  description: "Personal portfolio of Isaias Alvarez Vargas, Salesforce Developer.",
  openGraph: {
    title: "Isaias Alvarez Vargas | Salesforce Developer",
    description: "Personal portfolio of Isaias Alvarez Vargas, Salesforce Developer.",
    siteName: "Isaias Alvarez Vargas | Salesforce Developer",
    url: portfolioData.domain,
  },
  authors: [{ name: "Isaias Alvarez Vargas", url: "https://www.linkedin.com/in/isaias-alvarez-vargas-654935214/" }],
  creator: "Isaias Alvarez Vargas",
  publisher: "Isaias Alvarez Vargas",
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
        {children}
      </body>
    </html>
  );
}
