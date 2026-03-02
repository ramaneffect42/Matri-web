import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import the AuthProvider from your lib folder
import { AuthProvider } from "@/lib/auth-context";

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
      <body className="antialiased">
        {/* Wrapping children in AuthProvider makes the user state available to every page */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}