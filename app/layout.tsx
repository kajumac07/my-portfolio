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
  title: "Atul Tiwari | Cross-Platform & iOS App Developer",
  description:
    "Atul Tiwari - Expert in Flutter, Cross-Platform Mobile App Development, Firebase, Push Notifications, iOS Development, and SwiftUI. Building performant, scalable, and beautiful apps.",
  keywords: [
    "Atul Tiwari",
    "Flutter",
    "Cross Platform",
    "Mobile App Developer",
    "Firebase",
    "Push Notification",
    "iOS Development",
    "SwiftUI",
    "React Native",
    "App Portfolio",
    "Mobile Development",
    "Software Engineer",
    "Dart",
    "Swift",
    "Next.js",
    "Frontend",
    "Backend",
    "Full Stack",
    "UI/UX",
    "App Design",
    "Mobile Experience",
  ],
  authors: [
    { name: "Atul Tiwari", url: "https://portfolio-app-dev.vercel.app/" },
  ],
  creator: "Atul Tiwari",
  openGraph: {
    title: "Atul Tiwari | Cross-Platform & iOS App Developer",
    description:
      "Portfolio of Atul Tiwari, specializing in Flutter, Firebase, Push Notifications, iOS Development, and SwiftUI. Let's build your next app together.",
    url: "https://portfolio-app-dev.vercel.app/",
    type: "website",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Atul Tiwari - App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Tiwari | Cross-Platform & iOS App Developer",
    description:
      "Expert in Flutter, Cross-Platform Mobile App Development, Firebase, Push Notifications, iOS Development, and SwiftUI.",
    images: ["/portfolio.png"],
    creator: "@atultiwari",
  },
  metadataBase: new URL("https://portfolio-app-dev.vercel.app/"),
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
