import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jenish-shah.vercel.app"),
  title: {
    default: "Zenith Shah (Jenish Shah) | Frontend Developer",
    template: "%s | Zenith Shah (Jenish Shah)",
  },
  description: "Zenith Shah (legally Jenish Shah) is a Frontend Developer specializing in high-performance React & Next.js web experiences.",
  keywords: ["Zenith Shah", "Jenish Shah", "Frontend Developer", "React Developer", "Next.js Developer", "Web Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Zenith Shah" }, { name: "Jenish Shah" }],
  creator: "Zenith Shah",
  openGraph: {
    title: "Zenith Shah (Jenish Shah) | Frontend Developer",
    description: "Building high-performance, accessible web experiences. Check out my portfolio.",
    url: "https://jenish-shah.vercel.app",
    siteName: "Zenith Shah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // We will need to ensure this image exists
        width: 1200,
        height: 630,
        alt: "Zenith Shah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Shah (Jenish Shah) | Frontend Developer",
    description: "Building high-performance, accessible web experiences. Check out my portfolio.",
    creator: "@jenishshah", // Update if specific handle known, otherwise generic
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import AnalyticsProvider from "@/components/AnalyticsProvider";
import { Suspense } from "react";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zenith Shah",
              "alternateName": "Jenish Shah",
              "url": "https://jenish-shah.vercel.app",
              "jobTitle": "Frontend Developer",
              "sameAs": [
                "https://www.linkedin.com/in/jenish-shah-8a4863382/",
                "https://github.com/zenithshah07-creator",
                "https://x.com/DANAXYZx5?s=09"
              ],
              "knowsAbout": ["React", "Next.js", "Frontend Development", "Web Accessibility", "SEO"],
              "description": "Zenith Shah (legally Jenish Shah) is a Frontend Developer specializing in React and Next.js."
            }),
          }}
        />
        <Suspense fallback={null}>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
