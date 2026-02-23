import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Matri - Supporting You Through Every Stage of Motherhood",
  description: "Matri is your trusted companion for maternal wellness. Track your health, understand your body, and feel supported through pregnancy, postpartum, and beyond with privacy-first care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
