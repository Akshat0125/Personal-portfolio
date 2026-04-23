import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshat Upadhyay | Rust & Web3 Developer",
  description: "Personal portfolio of Akshat Upadhyay, a Blockchain Engineer and AI/ML Enthusiast.",
  icons: {
    icon: "/icon.png?v=3",
    apple: "/apple-icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
