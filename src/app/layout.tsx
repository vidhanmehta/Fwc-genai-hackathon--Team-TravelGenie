import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNavDemo from "@/components/NNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoamMyWay",
  description: "Plan Your trips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <FloatingNavDemo />
        </div>
        {children}
      </body>
    </html>
  );
}
