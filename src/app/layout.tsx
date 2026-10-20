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
  title: "Harshvardhan Gund | AI Systems Engineer & Full-Stack ML Architect",
  description:
    "Portfolio of Harshvardhan Gund — Team Lead @ Team Vighnaharta. Engineering anticipatory disaster intelligence (CycloneShield AI), explainable AI threat detection (TrustLink AI, Digital Fraud Portal), and civic innovation platforms (MahaInnovate SIH26136).",
  keywords: [
    "Harshvardhan Gund",
    "AI Systems Engineer",
    "Full-Stack Machine Learning",
    "CycloneShield AI",
    "MahaInnovate",
    "TrustLink AI",
    "Digital Fraud Portal",
    "RoadGuard AI",
    "FastAPI",
    "Next.js",
    "YOLOv8",
    "Computer Vision",
    "Disaster Intelligence",
  ],
  authors: [{ name: "Harshvardhan Gund" }],
  openGraph: {
    title: "Harshvardhan Gund | AI Systems Engineer & Full-Stack ML Architect",
    description: "Building resilient AI systems that predict, protect, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
