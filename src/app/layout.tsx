import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant Pokhrel | Full Stack Developer",
  description:
    "Prashant Pokhrel is a Full Stack Developer specializing in React, Next.js, and scaling digital experiences. Explore my projects, skills, and professional journey.",
  keywords: [
    "Prashant Pokhrel",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Development Portfolio",
    "Nepal Developer",
  ],
  authors: [{ name: "Prashant Pokhrel" }],
  openGraph: {
    title: "Prashant Pokhrel | Full Stack Developer",
    description:
      "Explore the portfolio of Prashant Pokhrel, a creative developer crafting scalable web applications.",
    url: "https://prashant-pokhrel.web.app",
    siteName: "Prashant Pokhrel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prashant Pokhrel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Pokhrel | Full Stack Developer",
    description: "Full Stack Developer building modern web experiences.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prashant Pokhrel",
    url: "https://prashant-pokhrel.web.app",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/shadoweminence",
      "https://www.linkedin.com/in/pokhrel-prashant-578a93209/",
    ],
    description: "Full Stack Developer specializing in React and Next.js.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
